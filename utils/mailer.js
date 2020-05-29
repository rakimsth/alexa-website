const nodemailer = require("nodemailer");

class Mailer {
    async main({ fullname, organization, email, country }) {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // generated ethereal user
                pass:  process.env.SMTP_PASS// generated ethereal password
            },
            //if email is sent via localhost
            tls: {
                rejectUnauthorized: false
            }
        });
        let mailOptions = {
            from: '"Rumsan Butler" <butler@rumsan.com>', // sender address
            to: `raktim@rumsan.com`, // list of receivers
            subject: "New Demo Request from Website", // Subject line
            text: "New Request", // plain text body
            html:
                "<h2> New Demo Request From :</h2><br/><h2>Name: </h2>" +
                fullname +
                "<br/><h2>Organization:</h2> " +
                organization +
                "<br/><h2>Email:</h2>" +
                email +
                "<br/><h2>Country:</h2>" +
                country
            // html body
        };
        let info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return;
    }
}

module.exports = new Mailer();
