const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPosts)