
exports.up = function (knex) {
  return knex.schema
    .createTable('animal', function (table) {
      table.increments('id_animal');
      table.string('nombre', 255).notNullable();
      table.boolean('en_peligro').notNullable().defaultTo(true);
      table.boolean('active').notNullable().defaultTo(true);
    })
};

exports.down = function (knex) {

};
