const express = require("express");
const {
  registerMail,
  busInovice,
  cancelRequestRefNo,
  cancelTicket,
  changePassword,
  changeTxnPassword,
  feedbackAndComplain,
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
  cancelRequest,
  flightSegment,
} = require("../Controllers/MailHandlerControllers");
const router = express.Router();

router.post("/register", registerMail);
router.post("/busInovice", busInovice);
router.post("/cancelRequest", cancelRequest);
router.post("/cancelRequestRefNo", cancelRequestRefNo);
router.post("/cancelTicket", cancelTicket);
router.post("/changePassword", changePassword);
router.post("/changeTxnPassword", changeTxnPassword);
router.post("/feedbackAndComplain", feedbackAndComplain);
router.post("/flightSegment", flightSegment);
router.post("/flightTicket", flightTicket);
router.post("/forgotPassword", forgotPassword);
router.post("/groupEnquiryRequest", groupEnquiryRequest);
router.post("/hotelInovice", hotelInovice);
router.post("/hotelRoomBooking", hotelRoomBooking);
router.post("/inovice", inovice);
router.post("/paymentCancelMail", paymentCancelMail);
router.post("/printTicket", printTicket);
router.post("/ticketingSystem", ticketingSystem);
router.post("/userActivation", userActivation);

module.exports = router;
