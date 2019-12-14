const respond = require("./send");

const handleWebhook = (req, res, state) => {
  const data = req.body.entry[0].messaging[0];
  const senderId = data.sender.id;
  const message = data.message;
  state.startConversation(senderId)
  console.log(message);
  const text = message.text;



  if (message['quick_reply']) {
    switch (true) {
      case message['quick_reply'].payload =='1-10':
      respond(senderId, { 'text': 'Wybrałeś 10 km' }) 
      respond(senderId, {
          text: "Wolisz wege czy normalne", "quick_replies": [
            {
              "content_type": "text",
              "title": "Wege",
              "payload": "2-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "Normalne",
              "payload": "2-20",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
      case message['quick_reply'].payload =='1-20':
        respond(senderId, { 'text': 'Wybrałeś 20 km' }) 
        respond(senderId, {
          text: "Wolisz wege czy normalne", "quick_replies": [
            {
              "content_type": "text",
              "title": "10 km",
              "payload": "2-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "20 km",
              "payload": "2-20",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
      case message['quick_reply'].payload =='2-10':
        respond(senderId, { 'text': 'Wybrałeś Wege' }) 
        respond(senderId, {
          text: "Jaki rodzaj kuchni preferujesz?", "quick_replies": [
            {
              "content_type": "text",
              "title": "Polska",
              "payload": "3-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "Japońska",
              "payload": "3-20",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
      case message['quick_reply'].payload =='2-20':
        respond(senderId, { 'text': 'Wybrałeś Normalne' }) 
        respond(senderId, {
          text: "Jaki rodzaj kuchni preferujesz?", "quick_replies": [
            {
              "content_type": "text",
              "title": "Polska",
              "payload": "3-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "Japońska",
              "payload": "3-20",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
      case message['quick_reply'].payload =='3-10':
        respond(senderId, { 'text': 'Wybrałeś Polską kuchnię' }) 
        respond(senderId, {
          text: "Jaki rodzaj kuchni preferujesz?", "quick_replies": [
            {
              "content_type": "text",
              "title": "Poniżej 4 gwiazdek",
              "payload": "4-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "Powyżej 4 gwiazdek",
              "payload": "4-10",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
      case message['quick_reply'].payload =='3-20':
        respond(senderId, { 'text': 'Wybrałeś Japońską kuchnię' }) 
        respond(senderId, {
          text: "Wybierz ocenę?", "quick_replies": [
            {
              "content_type": "text",
              "title": "Poniżej 4 gwiazdek",
              "payload": "4-10",
              // "image_url": "http://example.com/img/red.png"
            }, {
              "content_type": "text",
              "title": "Powyżej 4 gwiazdek",
              "payload": "4-10",
              // "image_url": "http://example.com/img/green.png"
            }
          ]});
        break;
        case message['quick_reply'].payload =='4-10':
          respond(senderId, { 'text': 'realizuje zamowienie' }) 
          break;
      default:
        respond(senderId, { 'text': 'nie rozumiem' })
        break;
    }
  } else {
    respond(senderId, {
      text: "Hej! Jestem chatbotem do zamówienia jedzenia wybierz opcję aby rozpocząć, podaj swoją lokalizację: ", "quick_replies": [
        {
          "content_type": "text",
          "title": "10 km",
          "payload": "1-10",
          // "image_url": "http://example.com/img/red.png"
        }, {
          "content_type": "text",
          "title": "20 km",
          "payload": "1-20",
          // "image_url": "http://example.com/img/green.png"
        }
      ]});
  }

  res.sendStatus(200);
};

module.exports = handleWebhook;
