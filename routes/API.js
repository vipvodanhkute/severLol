var express = require('express');
var router = express.Router();
var APIChamp = require('../models/APIChamp')
const axios = require('axios');
var fs = require('fs-extra')
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
router.get('/:infoChamp', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const champ = async () => axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/vn_VN/champion/${req.params.infoChamp}.json`)
    champ()
        .then(e => res.json(Object.values(e.data.data)[0]))
        .catch(err => res.status(400).send("Not Found"))

})

router.put('/', (req, res) => {
    APIChamp.findOne({ name: req.body.name, key: { $ne: req.body.key } }, (err, champ) => {
        if (err) return console.log(err)
        if (champ) {
            res.json({ type: "danger", text: "Please choose name another" })
        } else {
            res.json({ type: "success", text: "Eidted" })
            APIChamp.find({ key: req.body.key }, (err, champ) => {
                // console.log(champ)
                
                // champ.name = req.body.name
                // champ.title = req.body.title;
                // champ.blurb = req.body.blurb;
                // // if(req.files){
                // //     champ.image.full=req.files.image.name   
                // // }
                champ.save()
                 /*const path=`public/image/champion/${req.body.pimage}`
                 fs.remove(path,err=>{
                    if(err) console.log(err)
                 })
                 req.files.image.mv(`public/image/champion/${req.files.image.name}`)*/
                
            })
        }
    })
})
module.exports = router

