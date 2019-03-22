exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.bigIncrements();
    table.string('email', 255).notNullable().unique();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
