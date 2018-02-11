const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaOptions = require('./schemaOptions');

const paymentSchema = new Schema ({
  _customer : {
    type : Schema.Types.ObjectId,
    required : true
  },
  amount : {
    type : Number,
    required : true
  }
}, schemaOptions);

module.exports = mongoose.model('Payment', paymentSchema);
