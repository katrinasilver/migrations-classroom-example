const db = require('./db')

db('courses')
.join('courses', 'students.course_id', 'courses.id')
.then(data => {
  console.log(data)
}).catch(() => {
  console.log(`❌ Connection Failed`);
}).finally(db.destroy)
// db.raw(`SELECT 1 + 1 AS result`).then(() => {
//   console.log(`✅ You are connected to your database.`)
// }).catch(() => {
//   console.log(`❌ Connection failed. Please make sure your database is created.`)
// }).finally(db.destroy)
