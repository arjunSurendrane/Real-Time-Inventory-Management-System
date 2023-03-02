import express from 'express';
import { retrieveInventory } from '../controller/inventory.js';
const router = express.Router()


router.get('/', retrieveInventory)


export default router