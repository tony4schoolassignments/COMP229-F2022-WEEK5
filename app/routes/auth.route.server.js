import {Router} from 'express';
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage, 
    ProcessRegisterPage, 
    ProcessLogoutPage } from '../controllers/auth.controller.server.js';

const router = Router();

// Display Login page
router.get('/login', DisplayLoginPage);

// Process Login page
router.post('/login', ProcessLoginPage);

// Display Registration page
router.get('/register', DisplayRegisterPage);

// Process Registration page
router.post('/register', ProcessRegisterPage);

// Process Logout page
router.get('/logout', ProcessLogoutPage);

export default router;
