const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

router.get('/products', controllers.getp)