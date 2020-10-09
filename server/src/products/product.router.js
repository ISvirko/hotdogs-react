const { Router } = require('express');
const router = Router();
const {
  createProduct,
  getAllProducts,
  editProduct,
  deleteProduct,
  findProductByName,
} = require('./product.controller');

router.post('/hotdogs', createProduct);

router.get('/hotdogs', getAllProducts);

router.get('/hotdogs/:name', findProductByName);

router.put('/hotdogs/:id', editProduct);

router.delete('/hotdogs/:id', deleteProduct);

module.exports = router;
