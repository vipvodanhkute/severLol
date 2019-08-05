var express = require('express');
 var router = express.Router()
 router.post('/',(req,res)=>{
     if(req.files===null){
         return res.status(400).json({msg: 'No file uploaded'})
     }
     const file = req.files.file
     file.mv(`/home/nhuhuynh/Desktop/reactJS/severLoL/reactjslol/static/upload/${file.name}`,err=>{
         if(err){
             console.log(err);
             return res.status(500).send(err);
         }
         res.json({fileName:file.name, filePath:`/uploads/${file.name}`});
     })
 })
 module.exports = router