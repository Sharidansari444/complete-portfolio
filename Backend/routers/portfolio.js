/* eslint-disable no-undef */


const express = require("express")
const { sendEmail } = require("../controller/portfolioController")

const router = express.Router({ caseSensitive: true })

router.route("/sendemail").post(sendEmail)


module.exports = router