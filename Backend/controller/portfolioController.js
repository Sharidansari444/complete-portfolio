
/* eslint-disable no-undef */
const sendemail = require("../sendemail")

// eslint-disable-next-line no-unused-vars
const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(500).json({
      success: false,
      message: "please field the all input field"
    })

  }

  try {
    await sendemail({

      email: "sharidansari444@gmail.com",
      subject: "Message from porfolio",
      message,
      userEmail: email,


    })
    res.status(200).json({
      sucess: true,
      message: "message send successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: " message not send please try again"
    })
  }
}

module.exports = { sendEmail }