const hostMail = ({ name, location, date, time, link }) => {
  return `<html style="padding: 0; margin: 0">
  <body style="padding: 0; margin: 0">
    <style>
      @font-face {
        font-family: "Bogle";
        src: url("http://innovativemate.com/fonts/Bogle/Bogle-Regular.otf");
      }
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
    </style>
    <table
      style="
        background-color: #eee;
        width: 100%;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
      "
    >
      <tr>
        <td style="padding: 20px; text-align: center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5c/It_is_logo_of_LDRP.png"
            alt="LDRP"
            style="height: 80px; width: 80px"
          />
        </td>
      </tr>
      <tr>
        <td>
          <table
            style="
              max-width: 500px;
              width: 100%;
              background-color: #fff;
              margin: 10px auto 40px;
              border-radius: 10px;
              padding: 30px 10px;
            "
          >
            <tr style="text-align: center">
              <td>
                <h3 style="margin: 0; font-size: 24px; font-weight: 400">
                  Visitor Notification
                </h3>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <h3 style="margin-top: 30px">${name} is here to see you!</h3>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p>
                  They checked in to <strong>${location}</strong> on
                  <strong>${date}</strong> at <strong>${time}</strong>.
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a
                  href="${link}"
                  style="
                    border: 1px solid #2d71c7;
                    background-color: #2d71c7;
                    color: #fff;
                    border-radius: 40px;
                    font-size: 20px;
                    margin-top: 20px;
                    display: inline-block;
                    text-decoration: none;
                    padding: 15px 30px;
                  "
                >
                  Visitor Info!
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

module.exports = hostMail;
