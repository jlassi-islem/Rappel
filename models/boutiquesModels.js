const mongoose = require('mongoose')
const boutiquesSchema = mongoose.model('boutiques', new mongoose.Schema({

id_boutique:{
    type:Number,
    required : true ,
    trim : true , 
},
nom_boutique:{
    type:String,
    required : true ,
    trim : true , 
},
ville:{
    type:String,
    required : true ,
    trim : true , 
},
téléphone:{
    type:Number,
    required : true ,
    trim : true , 
},
fax:{
    type:String,
    required : true ,
    trim : true , 
},
email:{
    type:String,
    required : true ,
    trim : true , // supprime les espaces
     validate : {
      validator : function validateEmail(v){
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
        return true
    } else {
         return false
     }
     }
 }
},
boite_postal:{
    type:Number,
    required : true ,
    trim : true , 
},
}))
module.exports = boutiquesSchema