const nodemailer = require("nodemailer");

function contactEmail(email, name, phonenumber, message){

    const output = `
        <div style="display: flex; flex-direction: column; align-items: flex-end">
            <h3 style="font-size: 52px; text-align: end;">פנייה מהאתר של המילטון ביץ׳ לשירות לקוחות של שאוליאן</h3>
            <p style="font-size: 30px; text-align: end;"> שם הלקוח: ${name}</p>
            <p style="font-size: 30px; text-align: end;">${phonenumber} :טלפון</p>
            <p style="font-size: 30px; text-align: end;">${email} :מייל</p>
            <h3 style="font-size: 40px; text-align: end;">תוכן ההודעה</h3>
            <p style="font-size: 30px; text-align: end;">${message}</p>
        </div>
    `;

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
        subject: "פנייה לשירות לקוחות מאתר המילטון ביץ,", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };
        
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
    });
}

module.exports = contactEmail;
