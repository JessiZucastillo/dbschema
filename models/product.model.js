// Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const imageSchema = new Schema ({
  path : {
    type : String,
    required : true
  }
});

const productSchema = new Schema ({
  _creator : {
    type : Schema.Types.ObjectId,
    required : true
  },
  _productLine : {
    type : Schema.Types.ObjectId,
    required : true
  },
  code : {
    type : String,
    unique : true,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  description : {
    type : String
  },
  quantityInStock : {
    type : Number,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  images : [imageSchema],
  disabled : false,
  deleted : false
}, schemaOptions);


module.exports = mongoose.model('Product', productSchema);
