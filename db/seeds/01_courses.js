const tableName = 'courses'

exports.seed = knex => {
  return knex(tableName).insert([
    { id: 1, name: 'Web Development Immersive', price: 21000 },
    { id: 2, name: 'Data Science Immersive', price: 16000 },
    { id: 3, name: 'Front End Web Development', price: 3000 },
    { id: 4, name: 'Web Development Foundations', price: 900 },
    { id: 5, name: 'Data Analytics Track', price: 5000 },
    // What is the cost of the course below?
    { id: 6, name: 'Learn to Code' }
  ]).then(() => {
    // What is the purpose of this line?
    // How does it work?
    // What would happen if you *did not* include this?
    return knex.raw(`SELECT setval('${tableName}_id_seq', (SELECT MAX(id) FROM ${tableName}));`)
  })
}
