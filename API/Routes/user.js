import express from 'express'
import { register } from '../Controllers/user.js';

const router = express.Router();

//Register user
router.post('/register',register)

//Login User
router.post('/login',login)

export default router 