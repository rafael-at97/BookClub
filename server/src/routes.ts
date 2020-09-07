import express, { text } from 'express';
import db from './database/connection';
import hourToMinutes from './utils/timeutils';

const routes = express.Router();
 
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/books', async (request, response) => {
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
});

export default routes;