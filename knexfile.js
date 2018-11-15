const path = require('path')

module.exports = {

  // setup database connection
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/migrations_classroom_example_dev', // database name
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
};
