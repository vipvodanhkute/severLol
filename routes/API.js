var express = require('express');
var router = express.Router();
var APIChamp = require('../models/APIChamp')
const axios = require('axios');

router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    APIChamp.find({})
        .then(data => res.json(data))
})

// router.get('/:champ', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     APIChamp.findOne({ name: req.params.champ }, (err, champ) => {
//         if (!champ) return res.status(404).send('Not Found')
//         res.json(champ)
//     })
// })
router.get('/:infoChamp',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const champ=async()=>axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/vn_VN/champion/${req.params.infoChamp}.json`)
    champ()
    .then(e=>res.json(Object.values(e.data.data)[0]))
    .catch(err=>res.status(400).send("Not Found"))
    
})
module.exports = router

