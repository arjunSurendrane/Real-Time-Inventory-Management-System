import express from 'express';
import { createInventory, deleteInventory, inventory, retrieveInventory, updateInventory } from '../controller/inventory.js';
const router = express.Router()


router.get('/', retrieveInventory)
router.get('/:id', inventory)
router.post('/', createInventory)
router.put('/:id', updateInventory)
router.delete('/:id', deleteInventory)


export default router