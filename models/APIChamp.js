var mongoose=require('mongoose')
const ApiChampSchema = mongoose.Schema({
    key:{
        type:Number,
        // require:true
    },
    name:{
        type:String,
        // require:true
    },
    title:{
        type:String,
        // require:true
    },
    blurb:{
        type:String,
        // require:true
    },
    info:{
        type:Object,
        // require:true
    },
    image:{
        // type:Object,
        // require:true
        full:String,
        sprite:String,
        group:String,
        x:Number,
        y:Number,
        w:Number,
        h:Number,
    },
    tags:{
        type:Array,
        // require:true
    },
    partype:{
        type:String,
        // require:true
    },
    stats:{
        type:Object,
        // require:true
    }
})
module.exports= mongoose.model('apiChamp',ApiChampSchema)