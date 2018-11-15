exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(() =>  knex('courses').del())
}
