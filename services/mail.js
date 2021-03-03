const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

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
