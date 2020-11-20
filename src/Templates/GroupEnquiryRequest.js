const { footer } = require("./Footer");
const { header } = require("./Header");

const groupEnquiryRequestTemplate = () => {
  let groupEnquiry =
    header() +
    `<b>Dear <name></b> ,<br/><br/>Thank you for successful submitting of group enquiry.<br/><br/> <b><domain></b> welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.<br/>Now enjoy the <services> services & excellent features online.<br/><br/>Your Group Enquiry Information. Please find your details below.<br/>Email: <b><emailid></b><br/>Contact Number: <b><contactno></b><br/>Number Of Passengers: <b><passengerscount></b><br/>Source: <b><source></b><br/>Destination: <b><destination></b><br/>Departure Date: <b><departdate></b><br/>Return Date: <b><returndate></b><br/>Trip Type: <b><triptype></b><br/>Service: <b><service></b><br/><br/> We want to make your service experience better.<br/><br/>If you have any query please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/>It is recommended that you print, then destroy this email afterwards for added security.<br/><br/>Warm Regards,<br/><domain> Team.<br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email.
    
    ` +
    footer();
  return groupEnquiry;
};
module.exports = { groupEnquiryRequestTemplate };
