const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptSchema = new Schema({
  store: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  GSTReg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  receiptId: {
    type: String,
    required: true
  },
  descriptions: [
    {
      name: {
        type: String,
        required: true
      },
      QTY: {
        type: Number,
        required: true
      },
      unitPrice: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Receipt', receiptSchema)