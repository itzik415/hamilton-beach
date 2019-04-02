const nodemailer = require("nodemailer");
const Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');

const EMAIL_API =process.env.EMAIL_API;

function confirmPaymentToOfficeEmail(
    name, 
    email, 
    phonenumber, 
    street, 
    city, 
    zip , 
    products_name,
    products_model,
    products_serial,
    products_amount,
    products_price,
    total_price){

    const template = fs.readFileSync(path.join(process.cwd(), 'src/server/views/paymentToOffice.hjs'), 'utf-8')
    const compiledTemplate = Hogan.compile(template)
    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        auth: {
            user: 'apikey', 
            pass: EMAIL_API  
        }
    });

    let mailOptions = {
        from: `${email}`, // sender address
        to: "itzikshaoulian@gmail.com", // list of receivers
        subject: "אישור רכישת מוצרים מאתר Hamilton Beach", // Subject line
        text: "Hello world?", // plain text body
        html: compiledTemplate.render({ name, email, phonenumber, street, city, zip, products_name, products_model, products_serial, products_amount, products_price, total_price}) // html body
    };
        
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
    });
}

module.exports = confirmPaymentToOfficeEmail;