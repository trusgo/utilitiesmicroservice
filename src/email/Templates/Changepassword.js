const { footer } = require("./Footer");
const { header } = require("./Header");

const changePasswordTemplate = () => {
  let changePassword =
    header() +
    `<b>Dear <name> (<role>),</b><br/><br/>Your password has been successfully changed.<br/><br/>Kindly note your new login details.<br/><br/>URL: <b><loginurl></b><br/>Email id: <b><email></b><br/>Password: <b><password></b> <br/><br/>If you have any queries, please reach out to us at <b><supportmailid></b><br/><br/><b>With Regards,</b><br/><b><domain> Team.</b><br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email.` +
    footer();
  return changePassword;
};
module.exports = { changePasswordTemplate };
