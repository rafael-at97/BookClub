import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('meetup_schedules', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('book_id').notNullable().references('id').inTable('books').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('meetup_schedules');
}