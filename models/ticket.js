const shortId = require('shortid')
class Ticket {
    /**
   * @param {string} userName
   * @param {number} price
   */
    constructor(userName,price){
        this.ticketId = shortId.generate()
        this.userName = userName
        this.price = price
        this.createAt = new Date()
        this.updateTime = new Date()
    }
}

module.exports = Ticket