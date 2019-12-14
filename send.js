const fetch = require("node-fetch");

const ACCESS_TOKEN = "EAAGWO4CvsmEBAAMuuasbOKBlv0qyJnKosZBRr09OvkuYWr297bGUzcXyLs56FP8f3bVXPKBfDq62u7E6JfsHT1Q9ZCZA2WIdbS3aykJtYBx4jfdzrxFdRbvbLwca7vSMoiCPOZALhZASLnITuWgQcaZBKohIcyzhYV4fdQnyFcZBZAUJp5rAl79e";

const sendMessage = (recipientId, payload) => {
  const body = {
    messaging_type: "RESPONSE",
    recipient: {
      id: recipientId
    },
    message: payload
  };
  return fetch(
    `https://graph.facebook.com/v5.0/me/messages?access_token=${ACCESS_TOKEN}`,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(body)
    }
  )
    .then(result => {
      if (result.status !== 200) {
        result
          .json()
          .then(json =>
            console.error(
              `Error while making request [${JSON.stringify(
                body
              )}] with response [${JSON.stringify(json)}] and status ${
                result.status
              }`
            )
          );
      }
    })
    .catch(error => console.error(error));
};

module.exports = sendMessage;
