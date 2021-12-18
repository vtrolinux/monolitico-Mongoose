const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)

router.get('/:id', ProductController.getProduct)

router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)

router.post('/remove/:id', ProductController.removeProduct)

module.exports = router