const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const orderDetailSchema = new Schema ({
  _product : {
    type : Schema.Types.ObjectId,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  quantity : {
    type : Number,
    required : true
  }
})

const orderSchema = new Schema ({
  _customer : {
    type : Schema.Types.ObjectId,
    required : true
  },
  orderDetails : [orderDetailSchema]
}, schemaOptions);

module.exports = mongoose.model('Order', orderSchema);
