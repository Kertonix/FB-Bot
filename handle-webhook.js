const respond = require("./send");

const handleWebhook = (req, res) => {
  const data = req.body.entry[0].messaging[0];
  const senderId = data.sender.id;
  const message = data.message;

  console.log(message);

  if (message.text) {
    const text = message.text;
    respond(senderId, { text: "Hej!" + " Napisales " + message.text });
  }

  res.sendStatus(200);
};

module.exports = handleWebhook;
