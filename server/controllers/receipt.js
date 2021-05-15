const Record = require('../models/receipt.js')

module.exports = {
  getReceipt: async (req, res) => {
    try {
      const record = await Record.find() 
      res.send({ data: record })
      // res.render('form', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  postNewReceipt: async (req, res) => {
    const { store, tel, GSTReg, date, receiptId, descriptions, total } = req.body
    const newRecord = new Record({
      store: store,
      tel: tel, 
      GSTReg: GSTReg,
      date: date,
      receiptId: receiptId,
      descriptions: descriptions,
      total: total
    })
  
    try {
      a = await newRecord.save()
      res.json(a)
    } catch (err) {
      res.json({ message: err })
    }
  },
  getEditReceipt: async (req, res) => {
    try {
      //, userId: req.user._id
      const record = await Record.findOne({ _id: req.params.id })
      // res.render('form', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  editReceipt: async (req, res) => {
    const { store, tel, GSTReg, date, receiptId, descriptions, total } = req.body
    try {
      console.log(req.params.id)
      const targetRecord = await Record.findOne({ _id: req.params.id })

      console.log(targetRecord.store)
      targetRecord.store = store
      targetRecord.tel = tel
      targetRecord.GSTReg = GSTReg
      targetRecord.date = date
      targetRecord.receiptId = receiptId
      targetRecord.descriptions = descriptions
      targetRecord.total = total
      
      await targetRecord.save()
      res.send({ message: 'edit success'})
    } catch (err) {
      res.json({ message: err })
    }
  },
  deleteReceipt: async (req, res) => {
    try {
      await Record.deleteOne({ _id: req.params.id })
      res.send({ message: 'delete success'})
    } catch (err) {
      console.log(err)
    }
  }
}