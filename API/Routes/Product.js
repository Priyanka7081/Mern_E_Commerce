
import express from 'express';
import { addProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../Controllers/Product.js';

const router = express.Router();

//add product
router.post('/add', addProduct);

//get product
router.get('/all',getProducts)


//get product by id
router.get('/:id',getProductById)

//update product by Id
router.put('/:id',updateProductById)


//Delete Product by Id
router.delete('/:id',deleteProductById)

export default router;
