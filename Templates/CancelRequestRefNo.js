const { footer } = require("./Footer");
const { header } = require("./Header");

const cancelRequestrefNoTemplate = () => {
  let cancelRequestRefNo =
    header() +
    `<b>Dear <name>,</b><br/><br/>Please cancel the ticket for Reference Number: <b><refno></b>.<br/><br/>If you have any queries, please reach out to us at <b><supportmailid></b><br/><br/>It is recommended that you print, then destroy this email afterwards for added security.<br/><br/><b>With Regards,</b> <br/><b><domain> Team.</b><br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email.` +
    footer();
  return cancelRequestRefNo;
};
module.exports = { cancelRequestrefNoTemplate };
