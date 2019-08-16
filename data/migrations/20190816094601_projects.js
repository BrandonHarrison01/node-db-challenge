
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl.string('name').notNullable()
            tbl.string('description')
            tbl.boolean('complete').notNullable().defaultTo(false)
        })
        .createTable('tasks', tbl => {
            tbl.increments();

            tbl.string('description').notNullable()
            tbl.string('notes')
            tbl.boolean('complete').notNullable().defaultTo(false)
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('project_resources', tbl => {
            tbl.increments();

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('resources', tbl => {
            tbl.increments();

            tbl.string('resource_name').notNullable
            tbl.string('description')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('description')
        .dropTableIfExists('projects')
};
