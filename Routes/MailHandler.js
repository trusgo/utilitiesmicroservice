const express = require("express");
const nodemailer = require("nodemailer");
const { sendMail } = require("../Controllers/MailHandlerControllers");
const router = express.Router();

router.post("/", sendMail);

module.exports = router;
