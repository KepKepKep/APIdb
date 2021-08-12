const express = require('express');
const controllers = require('../controller');


const router = express.Router();


router.post('/', controllers.productController.createProduct.bind(controllers.productController));
router.get('/', controllers.productController.getProduct.bind(controllers.productController));
router.get('/:id', controllers.productController.getOneProduct.bind(controllers.productController));
router.put('/:id', controllers.productController.updateProduct.bind(controllers.productController));
router.delete('/:id', controllers.productController.deleteProduct.bind(controllers.productController));


module.exports = router;