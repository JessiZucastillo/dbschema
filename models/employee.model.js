// Dependencies
const mongoose  = require('mongoose'),
      validator = require('validator'),
      bcrypt    = require('bcryptjs');

const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const employeeSchema = new Schema ({
  name : {
    type : String,
    trim : true,
    minlength : 1,
    required : true
  },
  lastname : {
    type : String,
    trim : true,
    minlength : 1,
    required : true
  },
  email : {
    type : String,
    required : true,
    trim : true,
    minlength : 1,
    unique : true,
    validate : {
      validator : validator.isEmail,
      message : '{VALUE} is not a valid email'
    }
  },
  password : {
   type : String,
   required : true,
   minlength : 6,
   select : false
  }
}, schemaOptions);


employeeSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
      user.password = hashedPassword;
      next();
    });
  });

});


module.exports = mongoose.model('Employee', employeeSchema);
