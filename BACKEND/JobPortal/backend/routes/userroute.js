import express from 'express'
import {login,register,updateProfile,logout} from '../controller/usercontroller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/register').post(register);
// register is a function which listens to post req at /regitser url
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile/update').post(isAuthenticated,updateProfile);

export default router;