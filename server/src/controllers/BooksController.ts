import { Request, Response } from 'express';

import db from '../database/connection';
import hourToMinutes from '../utils/timeutils';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class BooksController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const genre = filters.genre as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.genre || !filters.time) {
            return response.status(400).json({
                error: "Missing filters"
            });
        }

        const timeInMinutes = hourToMinutes(time);

        const books = await db('books')
            .whereExists(function() {
                this.select('meetup_schedules.*')
                    .from('meetup_schedules')
                    .whereRaw('`meetup_schedule`.`book_id` = `books`.`id`')
                    .whereRaw('`meetup_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`meetup_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`meetup_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('books.genre', '=', genre)
            .join('users', 'books.user_id', '=', 'users.id')
            .select(['books.*', 'users.*']);

        return response.json(books);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            genre,
            avatar,
            bio,
            days,
            whatsapp,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try
        {
            const usersIds = await trx('users').insert({
                whatsapp
            })
    
            const user_id = usersIds[0];
    
            const booksIds = await trx('books').insert({
                name,
                avatar,
                bio,
                genre,
                days,
                user_id
            })
    
            const book_id = booksIds[0];
    
            const bookSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    book_id,
                    week_day: scheduleItem.week_day,
                    from: hourToMinutes(scheduleItem.from),
                    to: hourToMinutes(scheduleItem.to),
                };
            })
    
            await trx('meetup_schedules').insert(bookSchedule);
    
            await trx.commit();
    
            return response.status(201).send();
        }
        catch (err)
        {
            await trx.rollback();
    
            return response.status(400).json({
                error: "Unexpected"
            })
        }
    }
}