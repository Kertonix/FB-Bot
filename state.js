initialOptions = require('./mock');

class State {
    constructor() {
        this.data = []
    }
    getData(){
        console.log(this.data)
    }

    startConversation(senderId){
        this.data.push(
            {
            id : senderId,
            step: 0,
            options: JSON.parse(JSON.stringify(initialOptions))
            }  
        );
    }

    sendersIds(){
        return this.data.map((conversation) => conversation.id)
    }
    findUserIndex(senderId){
        return this.data.indexOf(x => x.id === senderId )
    }

    updateLocation(senderID, postcode){
        let userIndex = this.findUserIndex( senderID);
        this.data[userIndex].options = this.data[userIndex].options.filter(
            (el) => el.coords.long === '21' && el.coords.lat ==='52'
        )
    }
    updateCuisine(senderId, cuisine){
        let userIndex = this.findUserIndex( senderID);
        this.data[userIndex].options = this.data[userIndex].options.filter(
            (el) => el.cousine === '21' && el.cousine ==='52'
        )

    }
    

} 

module.exports = State;

