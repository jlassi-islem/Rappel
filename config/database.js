var mongoose = require ('mongoose');
var mongoDB = 'mongodb://127.0.0.1/Rappel';
var DB = mongoose.connection ;// pour sync l'execution de nos fct 
DB.on('error',console.error.bind(console,"MongoDB connection error:"));