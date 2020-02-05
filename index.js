const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
require('dotenv').config();
const { productsApi } = require('./client/src/services/productsApi.js');
const { contactsApi } = require('./client/src/services/contactsApi.js');


app.use('/products', productsApi)
app.use('/api/form', contactsApi)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(bodyParser.json())
// log requests to the console in dev mode
app.use(logger(‘dev’));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/src/assets')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.post('/api/form', (req, res) => {
  let htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    })
    let mailOptions = {
      from: req.body.email,
      to: process.env.USER,
      subject: 'New Message',
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('message sent: %s, info.message')
      console.log('message URL: %s, nodemailer.getTestMessageURL(info)')
    });
  })


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
