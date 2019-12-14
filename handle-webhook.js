const respond = require("./send");

const handleWebhook = (req, res, state) => {
  const data = req.body.entry[0].messaging[0];
  const senderId = data.sender.id;
  const message = data.message;
  state.startConversation(senderId)
  console.log(message);
  const text = message.text;



  if (message['quick_reply']) {
    if (message['quick_reply'].payload =='button-10km') {
      respond(senderId, { 'text': 'Wybrałeś 10km' })
    }   else if (message['quick_reply'].payload =='button-20km'){
      respond(senderId, { 'text': 'Wybrałeś 20km' })
    }else {
      respond(senderId, { 'text': 'Nie rozumiem' })

    }
  }else if(message.text['jakiś tekst']){
    respond(senderId, { 'text': 'jest git' })
  }else {
    respond(senderId, {
      text: "Hej! Jestem chatbotem do zamówienia jedzenia wybierz opcję aby rozpocząć, podaj swoją lokalizację: ", "quick_replies": [
        {
          "content_type": "text",
          "title": "10 km",
          "payload": "button-10km",
          "image_url": "http://example.com/img/red.png"
        }, {
          "content_type": "text",
          "title": "20 km",
          "payload": "button-20km",
          "image_url": "http://example.com/img/green.png"
        }
      ]});
  }

  res.sendStatus(200);
};

module.exports = handleWebhook;
