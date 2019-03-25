const nodemailer = require("nodemailer");
const Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');

function registrationEmail(email, name){
    const template = fs.readFileSync(path.join(__dirname, '../views/registration.hjs'), 'utf-8')
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
        subject: "אישור הרשמה לאתר Hamilton Beach", // Subject line
        text: "Hello world?", // plain text body
        html: compiledTemplate.render({name: name}) // html body
    };
        
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
            
        console.log('send email')
        res.end('working!')
    });
}

module.exports = registrationEmail;
