import { create, getAllInventory, getById, remove, update } from "../services/inventory.js"
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";


/**
 * Response function
 * @param {Object} res - response
 * @param {String} status - response status
 * @param {Object} data - response data
 */
const response = (res, status, data) => {
    res.status(status).json({
        status: 'success',
        data
    })
}

/**
 * Gel All Data
 * @description Retrieve all product details from inventory collection
 * @param {Object} req - request data
 * @param {Object} res - response
 */
export const retrieveInventory = catchAsync(async (req, res, next) => {
    const data = await getAllInventory();
    response(res, 200, data)
})

/**
 * Get One Document
 * @description Retrieve a specific product details from inventory collection
 * @param {Object} req - request data
 * @param {Object} res - response
 */
export const inventory = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const data = await getById(id)
    if (!data) return next(new AppError('This product not exist in inventory collection', 404))
    response(res, 200, data)
})

/**
 * Create New Document
 * @description Add a new product details into inventory collection
 * @param {Object} req 
 * @param {Object} res 
 */
export const createInventory = catchAsync(async (req, res, next) => {
    const { Name, Description, Quantity, Price, supplierId } = req.body
    const data = await create({ Name, Description, Quantity, Price, supplierId })
    response(res, 200, data)
})

/**
 * Update
 * @description Update Product details 
 * @param {Object} req 
 * @param {Object} res 
 */
export const updateInventory = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;
    const data = await update(id, updateData)
    response(res, 200, data)
})

/**
 * Delete
 * @description Delete product data from inventory collection
 * @param {Object} req 
 * @param {Object} res 
 */
export const deleteInventory = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const data = await remove(id)
    response(res, 200, data)
}) 