
exports.up = function (knex) {
  return knex.schema
    .createTable('especie', function (table) {
      table.increments('id_especie');
      table.string('nombre', 255).notNullable();
    })
    .table('animal', table => {
      table.string('id_especie', 255);
    })
};

exports.down = function (knex) {

};
