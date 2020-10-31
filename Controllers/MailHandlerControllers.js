const nodemailer = require("nodemailer");
const { cancelRequestTemplate } = require("../Templates/CancelRequest");
const { changePasswordTemplate } = require("../Templates/Changepassword");
const { changeTxnPasswordTemplate } = require("../Templates/ChangeTxnPassword");
const { registerTemplate } = require("../Templates/RegisterTemplate");
const {
  feedbackAndComplaintsTemplate,
} = require("../Templates/FeedbackandComplaints");
const { flightSegmentTemplate } = require("../Templates/FlightSegment");
const { flightTicketTemplate } = require("../Templates/FlightTicket");
const { forgotPasswordTemplate } = require("../Templates/ForgotPassword");
const {
  groupEnquiryRequestTemplate,
} = require("../Templates/GroupEnquiryRequest");
const { hotelInoviceTemplate } = require("../Templates/HotelInovice");
const { hotelRoomBookingTemplate } = require("../Templates/HotelRoomBooking");
const { inoviceTemplate } = require("../Templates/Inovice");
const { paymentCancelMailTemplate } = require("../Templates/PaymentCancelMail");
const { printTicketTemplate } = require("../Templates/PrintTicket");
const { ticketingSystemtemplate } = require("../Templates/TicketingSystem");
const { userActivationTemplate } = require("../Templates/UserActivation");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  //   secure: true,
  auth: {
    // user: "bookingsnotification@gmail.com",
    // pass: "Bookings@123",
    user: process.env.TESTAUTH,
    pass: process.env.TESTPASS,
  },
});

const from = "bookingsnotification@gmail.com";

const sendEmail = async (req, res, to, subject, html) => {
  try {
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: html,
    };
    const response = await transporter.sendMail(mailOptions);
    res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Something went wrong !");
  }
};

const registerMail = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    registerTemplate(req.body)
  );
};

const busInovice = async (req, res) => {
  sendEmail(req, res, req.body.to, req.body.subject, busInovice());
};

const cancelRequest = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    cancelRequestTemplate(req.body)
  );
};
const cancelRequestRefNo = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    cancelRequestrefNoTemplate(req.body)
  );
};
const cancelTicket = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    cancelTicketTemplate(req.body)
  );
};
const changePassword = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    changePasswordTemplate(req.body)
  );
};
const changeTxnPassword = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    changeTxnPasswordTemplate(req.body)
  );
};
const feedbackAndComplain = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    feedbackAndComplaintsTemplate(req.body)
  );
};
const flightSegment = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    flightSegmentTemplate(req.body)
  );
};
const flightTicket = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    flightTicketTemplate(req.body)
  );
};
const forgotPassword = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    forgotPasswordTemplate(req.body)
  );
};
const groupEnquiryRequest = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    groupEnquiryRequestTemplate(req.body)
  );
};
const hotelInovice = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    hotelInoviceTemplate(req.body)
  );
};
const hotelRoomBooking = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    hotelRoomBookingTemplate(req.body)
  );
};
const inovice = async (req, res) => {
  sendEmail(req, res, req.body.to, req.body.subject, inoviceTemplate(req.body));
};
const paymentCancelMail = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    paymentCancelMailTemplate(req.body)
  );
};
const printTicket = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    printTicketTemplate(req.body)
  );
};
const ticketingSystem = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    ticketingSystemtemplate(req.body)
  );
};
const userActivation = async (req, res) => {
  sendEmail(
    req,
    res,
    req.body.to,
    req.body.subject,
    userActivationTemplate(req.body)
  );
};

module.exports = {
  registerMail,
  busInovice,
  cancelRequest,
  cancelRequestRefNo,
  cancelTicket,
  changePassword,
  changeTxnPassword,
  feedbackAndComplain,
  flightSegment,
  flightTicket,
  forgotPassword,
  groupEnquiryRequest,
  hotelInovice,
  hotelRoomBooking,
  inovice,
  paymentCancelMail,
  printTicket,
  ticketingSystem,
  userActivation,
};
