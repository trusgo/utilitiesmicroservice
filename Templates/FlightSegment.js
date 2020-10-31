const { footer } = require("./Footer");
const { header } = require("./Header");

const flightSegmentTemplate = () => {
  let flightSegment =
    header() +
    `<table width="87%" align="center">
    <tr>
        <td colspan="2" style="padding-top: 0" align="center">
            <div id="Wrapper" style="overflow: visible; text-align: left; font-variant: normal;
                                    font-weight: normal; font-size: 14px; margin: 0; background-color: #fff; line-height: 20px;
                                    font-family: Asap, sans-serif; color: #333; padding: 0; font-style: normal; width: 100%;">

                <!-- start of the header -->
                 
                <div style="margin: 0; padding: 0;">
                    <div style="overflow: hidden; margin-bottom: 5px; padding: 0 0 5px;">
                        <div style="font-size: 22px; float: left;">
                            <div style="font-weight: bold; margin-right: 20px; padding: 0; float: left;">
                                <img id="imgLogo" src="<logo />" style="width: 150px;  height: 80px;" />
                                <br />
                                <div style="float: left; margin-bottom: 5px;">

                                </div>
                            </div>
                            <div style="float: left;"> 
                            </div>
                      
                        </div>
                  
                    </div>

                </div>
                <!-- end of the header-->
                <table width="100%" cellpadding=0 cellspacing=0 border=0>
                    <tr>
                        <td colspan=2>
                            <table width="100%" cellpadding=12 cellspacing=0 border=0>
                                <tr>
                                    <td>
                                        <div style="overflow: hidden;">
                                            <font size=-1>
                                                <p style="font-family:Arial,sans-serif;font-size:12px"><b>Dear Customer</b>,<br><br>Thanks for choosing <clientdomain />.Please find your travel itinerary details below.</p>
                                                <p style="font-family:Arial,sans-serif;font-size:12px">
                                                    <table width="100%" align="center" cellpadding="0" cellspacing="0" >
                                                        <tr>
                                                            <td colspan="2" style="padding-bottom:10px">
                                                                <flightsitinerary />
                                                            </td>
                                                        </tr>
                                                    </table>
                                            </font>
                                        </div>
                            </table>
                </table>

            </div>

        </td>
    </tr>
</table>
    ` +
    footer();
  return flightSegment;
};
module.exports = { flightSegmentTemplate };
