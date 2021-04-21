const sgMail = require("@sendgrid/mail");
const sgKey = `SG.${process.env.SG_KEY}`;
sgMail.setApiKey(sgKey);

const sendMail = ({
  to,
  from = "saumyapatel101@gmail.com",
  subject,
  text,
  html,
}) => {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  sgMail.send(msg).then(
    (response) => ({ status: 200 }),
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
      return { status: 400, error: error.response.body };
    }
  );
};

module.exports = { sendMail };
