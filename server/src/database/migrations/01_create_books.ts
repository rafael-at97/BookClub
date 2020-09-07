import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('bio').notNullable();
        table.string('genre').notNullable();
        table.integer('days');

        table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('books');
}