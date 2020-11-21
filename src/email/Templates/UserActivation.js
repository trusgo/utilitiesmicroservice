const { footer } = require("./Footer");
const { header } = require("./Header");

const userActivationTemplate = () => {
  let userActivation =
    header() +
    `<b>Dear <name>,</b><br/><br/><b><domain></b> welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.<br/>Now enjoy the <services> services & excellent features online.<br/><br/>Your Account Information. Please find your details below.<br/>Email: <b><emailid></b><br/><br/> Activation url: <b><loginurl></b><br/><br/>We want to make your service experience better. <br/><br/>If you have any query please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/>It is recommended that you print, then destroy this email afterwards for added security.<br/><b>Warm Regards,</b><br/><b><domain> Team</b><br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email.
    ` +
    footer();
  return userActivation;
};
module.exports = { userActivationTemplate };
