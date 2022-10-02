const router = require('express').Router()

router.use('/api/v1/tickets',require('../routes/ticket'))
router.get('/health',(req,res) => {    
    res.json({
        message: 'success'
    })
})


module.exports = router