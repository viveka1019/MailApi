const express = require('express')
const sgMail = require('@sendgrid/mail');
var cors = require('cors')
sgMail.setApiKey("<API Key>");

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.post('/mail', (req,res)=>{
    console.log(req.body)
     const msg = {
         to: 'mohan.priya1987@kaartech.com',
         from: 'vivek.buvana@gmail.com',
         subject: 'Mail from my application',
         text: 'Hello Priya! How are you?',
         html: '<strong><h1>and easy to do anywhere, even with Node.js</strong>',
       };
    sgMail.send(msg);
    res.send('Mail Successfully sent!!')
})


app.listen(port , () =>{
    console.log('Server is up and running in the port '+ port)
})
