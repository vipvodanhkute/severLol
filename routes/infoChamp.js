const express = require('express')
const APIChamp = require('../models/APIChamp')
const router = express.Router()

router.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // Access-Control-Allow-Origin:  http://127.0.0.1:3000
    // res.header("Access-Control-Allow-Methods", "POST")
    // Access-Control-Allow-Headers: Content-Type, Authorization
    APIChamp.findOne({name:req.query.name},(err,champ)=>{
        if(err) throw err
        if(!champ) return res.status(404).send('Not Found')
        // return res.json(champ)
        res.send("ok"+req.query.name)
    })
})
module.exports = router