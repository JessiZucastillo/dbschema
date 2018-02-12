require('./config');

const { mongoose } = require('./database');

const Employee = require('./models/employee.model')

// const fieldsToUpdate = {
//     password : 'Jessica12345'
// };

// UPDATE Employee SET password = 'newPassword' WHERE _id = 'someid'
// Employee.findOneAndUpdate({
//   _id : '5a8107ad74463e18e8908a15'
// }, { $set : fieldsToUpdate }, {
//   new : true
// }).then((updatedRecod) => {
//   console.log(JSON.stringify(updatedRecod, null, 2));
//   return Employee.find({},'name lastname email password')
// }).then((records) => {
//   console.log(JSON.stringify(records, null, 2));
// }).catch((err) => {
//   console.log(JSON.stringify(err, null, 2));
// })

// DELETE FROM Employee WHERE _id = 'Some ID'
// Employee.findOneAndRemove({
//   _id : "5a8107ad74463e18e8908a14"
// }).then((deletedRecord) => {
//   if (!deletedRecord) {
//     return Promise.reject('5a8107ad74463e18e8908a14 does not exists')
//   }
//   console.log('DELETED RECORD')
//   console.log(JSON.stringify(deletedRecord, null, 2));
//   return Employee.findOne({
//     _id : "5a8107ad74463e18e8908a14"
//   })
// }).then((record) => {
//   if (!record) {
//     return Promise.reject('5a8107ad74463e18e8908a14 does not exists')
//   }
//   console.log(JSON.stringify(record, null, 2));
// }).catch((err) => {
//   console.log(JSON.stringify(err, null, 2));
// })

// INSERT INTO Employee (name, lastname, email, password) VALUES (...), (...)
// Employee.insertMany([{
//   name : 'Roger',
//   lastname : 'Doe',
//   email : 'roger@doe.com',
//   password : '12345678'
// }, {
//   name : 'Jane',
//   lastname : 'Doe',
//   email : 'jane@doe.com',
//   password : '12345678'
// }]).then((newRecords) => {
//   console.log(JSON.stringify(newRecords, null, 2));
// }).catch((err) => {
//   console.log(JSON.stringify(err, null, 2));
// });

// INSERT INTO Employee (name, lastname, email, password) VALUES (...)
// const newEmployee = new Employee ({
//   name : 'John2',
//   lastname : 'Doe2',
//   email : 'jhon2@doe.com',
//   password : '1234567889'
// });
//
// newEmployee.save().then((newRecord) => {
//   console.log(JSON.stringify(newRecord, null,2))
// }).catch((err) => {
//   console.log(err);
//   console.log(JSON.stringify(err, null,2));
// })

// SELECT * FROM Employee
// Employee.find({}, 'name lastname email password').then((employees) => {
//   console.log(employees)
// }).catch((err) => {
//   console.log(err);
// })
