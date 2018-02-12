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
   minlength : 8,
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

employeeSchema.pre('findOneAndUpdate', function (next) {
  const { password } = this.getUpdate().$set;

  if (!password) { return next(); }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashedPassword) => {
      this.getUpdate().$set.password = hashedPassword;
      next();
    });
  });

});


// employeeSchema.pre('findOneAndUpdate', function (next) {
//   console.log('UPDATE HOOK')
//   const user = this;
//   console.log('USEr', JSON.stringify(user, null, 2))
//   if (!user.isModified('password')) {
//     console.log('Test')
//     return next();
//   }
//   console.log('UPDATE HASHING PASSWORD')
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(user.password, salt, (err, hashedPassword) => {
//       user.password = hashedPassword;
//       next();
//     });
//   });
//
// });


module.exports = mongoose.model('Employee', employeeSchema);
