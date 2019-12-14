const fetch = require("node-fetch");

const ACCESS_TOKEN = "EAASZC6bqk20YBAMGZCUmVQVcpYkhtOEhyYA2E4Cceq93T8xTfLblLhZABHdzVjg0v8aqNsS3BBgM04cZChr6Lselc23cNV03kTtJJnXWJGe2pYXGsGtsw1O3QVrNsIMPalLkLg4c3CUpYqN6XDIYickartZByzQnU5H8D0skTcNPuLIgtJkS7rpCF9KdrIyMZD";

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
