require('./config');

const { mongoose } = require('./database');

const Employee = require('./models/employee.model')


Employee.find({}).then((employees) => {
  console.log(employees)
}).catch((err) => {
  console.log(err);
})
