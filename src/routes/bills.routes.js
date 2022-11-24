import {Router} from 'express';
import {
    createBill, 
    getBills, 
    getBill} from '../controllers/bills.controller.js';

const router = Router()

router.get('/bills', getBills);
router.post('/bills', createBill);
router.get('/bills/:id', getBill);

export default router