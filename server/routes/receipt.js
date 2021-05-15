const express = require('express')
const router = express.Router()
const Receipt = require('../models/receipt.js')
const receiptController = require('../controllers/receipt')

// Get Receipts
router.get('/', receiptController.getReceipt)

// Add Receipts
router.post('/', receiptController.postNewReceipt)

// Edit Receipts
router.put('/:id', receiptController.editReceipt)

// Delete Receipts
router.delete('/:id', receiptController.deleteReceipt)

module.exports = router