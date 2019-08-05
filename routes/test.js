var express = require('express');
var router = express.Router();

router.post('/',(req,res)=>{
    res.send(req.body.name+'/n'+req.body.age)
    // res.send("adad")
})

module.exports = router

