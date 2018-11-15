
exports.up = knex => {
  return knex.schema.createTable('courses', (table) => {
    table.increments()
    table.string('name')
    table.integer('price').notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('courses')
