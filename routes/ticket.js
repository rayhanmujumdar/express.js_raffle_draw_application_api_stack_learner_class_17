const router = require("express").Router();
const myDb = require("../db/myDb");

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = myDb.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const ticketBody = req.body
    const upTicket = myDb.updateById(ticketId,ticketBody)
    res.status(201).json({
        message: 'update successfully',
        upTicket
    })
  })
  .delete((req,res) => {
    const ticketId = req.params.ticketId;
    const delTicket = myDb.deleteById(ticketId)
    console.log(delTicket)
    if(delTicket){
        res.status(204).json({
            message: 'resource deleted successfully"'
        })
    }else{
        const error = new Error('Not delete')
        error.status = 404
        throw error
    }
  });

router
  .route("/u/:username")
  .get((req,res) => {
    const {username} = req.params
    const userTicket = myDb.findByUsername(username)
    res.status(200).json(userTicket)
  })
  .patch(() => {})
  .delete(() => {});

router.get("", (req, res) => {
  const tickets = myDb.find();
  res.status(200).json(tickets);
});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = myDb.create(username, price);
  res.status(201).json({
    message: "ticket successfully created",
    ticket,
  });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = myDb.bulkCreate(username, price, quantity);
  res.status(200).json(tickets);
});

router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc || 3;
  const winner = myDb.draw(winnerCount);
  res.status(200).json(winner);
});

module.exports = router;
