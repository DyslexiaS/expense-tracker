const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })

const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Include routers
const receiptRoute = require('./routes/receipt')

app.use('/receipt', receiptRoute)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// Connext to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const port = process.env.PORT || 5000
    // Start and listen to server
    app.listen(port, () => {
      console.log(`Express is listening on http://localhost:${port}`)
    })
  })