const articlesModels = require ('../models/articlesModels.js');
module.exports= {

    CreateArticles: function ( req, res){
        const newarticle ={
            id_articles: req.body.id_articles,
            code_generale: req.body.code_generale,
            code_bare: req.body.code_bare,
            nom_article: req.body.nom_article,
            conditionnement: req.body.conditionnement,
            stock_min: req.body.stock_min,
            quantité: req.body.quantité,

        }
        articlesModels.create(newarticle, (err, articles) =>{
             if(err)
             res.status(500).json
            ({
                message: err,
                statut: 500
            })
            else 
            res.status(200).json({
                message: 'Article added ',
                statut: 200,
                data: articles
            })  
        })
    },
GetAllArticles:function (req,res){
    articlesModels.find({}).exec((err,listarticles)=>{
        if(err)
        res.status(500).json
        ({
            message: err,
            statut: 500
        })
        else
        res.status(200).json({
            message: 'articles founded',
            statut: 200,
            data: listarticles
        })
  
    })
},
GetArticlesById:function(req,res){
    articlesModels.findById({_id:req.params.id}).exec((err,articles)=>{
        if(err)
        res.status(500).json
        ({
            message: err,
            statut: 500
        })
        else
        res.status(200).json({
            message: 'article founded by id',
            statut: 200,
            data: articles
        })
    })
},
DeleteArticles : function (req,res){
    articlesModels.deleteOne({_id:req.params.id}).exec((err,articles)=>{
        if(err)
        res.status(500).json
        ({
            message: err,
            statut: 500
        })
        else
        res.status(200).json({
            message: 'article deleted',
            statut: 200,
            data: articles
        })
    })
    
},
ArticlesUpdate :function (req,res){
articlesModels.updateOne({_id: req.params.id},req.body).exec((err,articlesupdate)=>{
        if(err)
        res.status(500).json
        ({
            message: err,
            statut: 500
        })
        else
        res.status(200).json({
            message: 'article updated',
            statut: 200,
            data: articlesupdate
        })
    })
    

},
}
