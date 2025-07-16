import express from 'express'
import { addToCart, removeProductFromCart, userCart } from '../Controllers/cart.js';

const router = express.Router();

//Add to Cart
router.post('/add',addToCart)

// get user cart
router.get('/user',userCart)

// remove product from cart
router.delete('/remove/:productId',removeProductFromCart)

export default router;