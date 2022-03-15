const articlesControllers = require('../controllers/articlesControllers')
const route = require ('express').Router()


route.post('/create',articlesControllers.CreateArticles)
route.get('/all',articlesControllers.GetAllArticles)
route.get('/getone/:id',articlesControllers.GetArticlesById)
route.put('/update/:id',articlesControllers.ArticlesUpdate)
route.delete('/delete/:id',articlesControllers.DeleteArticles)

module.exports=route
