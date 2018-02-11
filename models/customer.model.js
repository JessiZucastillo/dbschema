const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const addressSchema = new Schema ({
  addressLine : {
    type : String,
    required : true
  },
  city : {
    type : String,
    required : true
  },
  state : {
    type : String,
    required : true
  },
  postalCode : {
    type : String,
    required : true
  },
  country : {
    type : String,
    required : true
  },
});

const customerSchema = new Schema ({
  googleId : {
    type : String,
    unique : true
  },
  facebookId : {
    type : String,
    unique : true
  },
  addresses : [addressSchema]
}, schemaOptions);


module.exports = mongoose.model('Customer', customerSchema);
