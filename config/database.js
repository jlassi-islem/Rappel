var mongoose = require ('mongoose');
const DB = 'mongodb://127.0.0.1/gestion_commerciale';
//var DB = mongoose.connection ;// pour sync l'execution de nos fct 
//DB.on('error',console.error.bind(console,"MongoDB connection error:"));

mongoose.connect(DB, (err)=>{
    if (err){
        console.log(err.message);
    } else {
            console.log("database is connected");
        
    }
});
