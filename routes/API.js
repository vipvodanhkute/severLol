var express = require('express');
var router = express.Router();
var APIChamp = require('../models/APIChamp')
const axios = require('axios');
var fs=require('fs-extra')
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

router.put('/:editchamp',(req,res)=>{
    // APIChamp.findOne({name:req.body.name,_id:{$ne:req.body.id}},(err,champ)=>{
    //     if(err) return console.log(err)
    //     if(champ){
    //         res.send("da ton ton tai")
    //     }else{
    //         APIChamp.findById(req.body.id,(err,champ)=>{
    //             champ.name="";
    //             champ.title="";
    //             champ.blurb="";
    //             champ.image.full=""
    //             champ.save(err=>{
    //                 if(err) return console.log(err)
    //                 const path=`public/image/champion/${req.body.pimage}`
    //                 fs.remove(path,err=>{
    //                     if(err) console.log(err)
    //                 })
    //                 req.files.file.mv(`public/image/champion/${req.files.file.name}`)
    //             })
    //         })
    //     }
    // })
    console.log(req.body)
    console.log(req.files)
    req.files.file.mv(`public/image/${req.files.file.name}`,err=>{
        if(err) return console.log(err)
    })
    fs.remove('public/image/Aatrox.png',err=>{
        if(err) console.log(err) 
    })
})
module.exports = router

