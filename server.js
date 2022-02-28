const express = require('express');

const  app = express(); 

 // parse application/json
 //const DB=  require("./config/database")


 //app c un middelware contient toutes les fctionnalités et les méthodes que offre express
 app.listen(3500,(err)=>{
    if(err)
    console.log('erreur de connexion',err)
    else
    console.log('serveur is running 3500')
    })
  