const { footer } = require("./Footer");
const { header } = require("./Header");

const changeTxnPasswordTemplate = () => {
  let changeTxnPassword =
    header() +
    `<b>Dear <name>(<role>)</b>,<br/><br/>Your Transaction password has been successfully changed.<br/>URL: <b><loginurl></b><br/>
    Password: <b><password></b> <br/><br/>If you have any queries, please reach out to us at <b><supportmailid></b><br/><br/><b>With Regards,</b> <br/><b><domain> Team.</b><br/>
    Address: <address>,<br/>Contact Number:  <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email.
    ` +
    footer();
  return changeTxnPassword;
};
module.exports = { changeTxnPasswordTemplate };
