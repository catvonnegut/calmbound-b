const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("./client/build/"));

if (process.env.NODE_ENV == "production") {
  app.get('/',function(req,res){
      res.sendFile(path.join("./client/build" + '/index.html'));//need to find the correct response file
  });
}


app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err,account) => {
    const htmlEmail = `
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
      port: 465,
      secure: true,
      auth: {
        user: 'dnuobmlac@gmail.com',
        pass: 'cbdthc420'
      }
    })
    let mailOptions = {
      from: 'test@testaccount.com',
      to: 'dnuobmlac@gmail.com',
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('message sent: %s, info.message')
      console.log('message URL: %s, nodemailer.getTestMessageURL(info)')
    })
    });
  })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
