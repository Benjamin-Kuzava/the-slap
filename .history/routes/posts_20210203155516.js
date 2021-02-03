const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.post('/posts', controllers.deletePost)