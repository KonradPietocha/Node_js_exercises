const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "youremail@gmail.com",
        pass: "yourpassword"
    }
});
const mailOptions = {
    from: "youremail@gmail.com",
    to: "myfriend@jahoo.com",
    subject: "sending email",
    text: "That was great!"
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});