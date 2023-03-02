import { create, getAllInventory, getById, remove, update } from "../services/inventory.js"



const response = (res, status, data) => {
    res.status(status).json({
        status: 'success',
        data
    })
}

export const retrieveInventory = async (req, res) => {
    const data = await getAllInventory();
    response(res, 200, data)
}


export const inventory = async (req, res) => {
    const { id } = req.params
    const data = await getById(id)
    response(res, 200, data)
}

export const createInventory = async (req, res) => {
    const { Name, Description, Quantity, Price, supplierId } = req.body
    const data = await create({ Name, Description, Quantity, Price, supplierId })
    response(res, 200, data)
}

export const updateInventory = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const data = await update(id, updateData)
    response(res, 200, data)
}


export const deleteInventory = async (req, res) => {
    const { id } = req.params;
    const data = await remove(id)
    response(res, 200, data)
}