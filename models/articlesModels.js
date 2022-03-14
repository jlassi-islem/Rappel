const mongoose =require('mongoose')
const articlesSchema = mongoose.model('articles', new mongoose.Schema({

    id_articles:{
        type:Number,
        required : true ,
        trim : true , // supprime les espaces
    },

    code_generale:{
        type:String,
        required : true ,
        trim : true ,  
    },
    code_bare:{
        type:Number,
        required : true ,
        trim : true , 
    },
    
    nom_article:{
        type:String,
        required : true ,
        trim : true , 
    },
    conditionnement:{
        type:String,
        required : true ,
        trim : true ,   
    },
    
    stock_min:{
        type:Number,
        required : true ,
        trim : true , 
    },
    
    quantité:{
        type:Number,
        required : true ,
        trim : true , 
    },
    
    
    
    







}))
module.exports = articlesSchema