const { footer } = require("./Footer");
const { header } = require("./Header");

const ticketingSystemtemplate = () => {
  let ticketingSystem =
    header() +
    `<b>Dear  <uname></b>,<br /><br />This is to inform you that, The Ticket has been <b><status></b>,<br /><br />Please include your Ticket RefNo - #<b><id></b> in the subject line of all future correspondence regarding this issue.<br /><br /> Issue Details: <br /> Service Type: <b><service></b> <br />  Api Provider: <b><apiprovider></b>  <br /> Issue Type: <b><issuetype></b> <br /> Issue Location: <b><issuelocname></b><br /> Priority: <b><ispriority></b> <br /><br /> Remarks: <b><issuedeatils></b> <br /> Issue Status: <b><status></b> <br /> Please revert if you have any queries.  <br /><br /><b>Sincerely,</b><br /> <b>Support Team. </b><br /><br /> 
    ` +
    footer();
  return ticketingSystem;
};
module.exports = { ticketingSystemtemplate };
