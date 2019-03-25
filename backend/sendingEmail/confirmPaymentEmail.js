const nodemailer = require("nodemailer");
const Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');

function confirmPaymentEmail(email, name){
    const template = fs.readFileSync(path.join(__dirname, '../views/payment.hjs'), 'utf-8')
    const compiledTemplate = Hogan.compile(template)
    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        auth: {
            user: 'apikey', 
            pass: process.env.EMAIL_API  
        }
    });

    let mailOptions = {
        from: `${email}`, // sender address
        to: "itzikshaoulian@gmail.com", // list of receivers
        subject: "אישור רכישת מוצרים מאתר Hamilton Beach", // Subject line
        text: "Hello world?", // plain text body
        html: compiledTemplate.render({name: name}) // html body
    };
        
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
    });
}

module.exports = confirmPaymentEmail;