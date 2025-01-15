/* eslint-disable no-undef */
const nodeMailer = require("nodemailer")


const sendemail = async(options)=>{
  const transporter = nodeMailer.createTransport({
    host:"smtp.mailgun.org",
    port :465,
    service: "gmail",
    auth:{
        user: "sharidansari111@gmail.com", 
        pass: "pgabcuoomkhlmbbg"
    }
  })

  const mailOptions= { 
    from : process.env.SMTP_MAIL,
    to: options.email,
    subject : options.subject,
    text: `${options.message} \n\n Email of user who send the message:${options.userEmail}`,
    name : options.name,
    html:`
    <h5> Details Information</h5>
    <ul>
    <li><p>Name : ${options.name}</p></li>
    <li><p>Email: ${options.userEmail}</p></li>
    <li><p>Message : ${options.message}</p></li>
   
    
    </ul>
    `
  }
  await transporter.sendMail(mailOptions)
}
module.exports = sendemail