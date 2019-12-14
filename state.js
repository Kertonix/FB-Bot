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
} 

module.exports = State;

