import express from 'express'
import { register, users,login } from '../Controllers/user.js';


const router = express.Router();

//Register user
router.post('/register',register)

//Login User
router.post('/login',login)

//get all users
router.get('/all',users)

export default router 