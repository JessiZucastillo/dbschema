// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const productLineSchema = new Schema ({
  _creator : {
    type : Schema.Types.ObjectId,
    required : true
  },
  name : {
    type : String,
    unique : true,
    required : true
  },
  description : {
    type : String
  },
  disabled : false,
  deleted : false
}, schemaOptions);

module.exports = mongoose.model('ProductLine', productLineSchema);
