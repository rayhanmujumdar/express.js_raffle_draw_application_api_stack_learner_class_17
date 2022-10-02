const Ticket = require("../models/ticket");
class MyDB {
  constructor() {
    this.tickets = [];
  }
  /**
   * @param {string} userName
   * @param {number} price
   * @returns {object<Ticket>} return a object
   */
  create(userName, price) {
    const newTicket = new Ticket(userName, price);
    this.tickets.push(newTicket);
    return newTicket;
  }
  find() {
    return this.tickets;
  }
  /**
   * @param {string} userName
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(userName, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(userName, price);
      result.push(ticket);
    }
    return result;
  }
  /**
   * @param {string} ticketId
   * @returns {Ticket }
   */
  findById(ticketId) {
    const findTicket = this.tickets.find(
      /**
       * @param {object} ticket
       */
      (ticket) => ticket.ticketId === ticketId
    );
    return findTicket;
  }
  findByUsername(userName) {
    const findTicketName = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === userName
    );
    return findTicketName;
  }
  /**
   * @param {string} ticketId
   * @param {{username: string,price: number}} ticketBody
   * @return {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const findUpdateData = this.findById(ticketId);
    findUpdateData.username = ticketBody.username || findUpdateData.username;
    findUpdateData.price = ticketBody.price || findUpdateData.price;
    findUpdateData.updatedAt = new Date();
    return findUpdateData;
  }
  /**
   * @param {string} ticketId
   * @returns {boolean}
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((item) => item.ticketId === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let count = 0;
    let winnerIndexes = new Array(winnerCount);
    let randomIndex = Math.floor(Math.random() * this.tickets.length);
    while (count < winnerCount) {
      if (winnerIndexes.indexOf(this.tickets[randomIndex]) !== -1) {
        randomIndex = Math.floor(Math.random() * this.tickets.length);
      } else {
        winnerIndexes[count++] = this.tickets[randomIndex];
      }
    }
    return winnerIndexes
  }
}

const myDB = new MyDB();
module.exports = myDB;
  