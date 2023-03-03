import mongoose from "mongoose"
import Inventory from "../models/inventory.js"



/**
 * Get All Inventory Data
 * @description Retirieve all product details from inventory collection
 * @returns {Array} - array of doucments
 */
export const getAllInventory = async () => {
    return await Inventory.find()
}

/**
 * Get One Product Data
 * @description Fetch a specific product details from inventory collection
 * @param {mongoose.Types.ObjectId} id - inventory object id
 * @returns {Object} - inventory details
 */
export const getById = async (id) => {
    return await Inventory.findById(id)
}

/**
 * Create new product data
 * @description Add a new product data into inventory collection
 * @param {Object} data - inventory details
 * @returns {Object} - inventory details
 */
export const create = async (data) => {
    return await Inventory.create(data)
}

/**
 * Updata Product
 * @description Update a specific product from inventory collection
 * @param {mongoose.Types.ObjectId} id - inventory id
 * @param {Object} data - updated data
 * @returns {Object} - inventory details
 */
export const update = async (id, data) => {
    return await Inventory.findByIdAndUpdate(id, data)
}

/**
 * Delete Product
 * @description Delete a specific procuct from inventory collection
 * @param {mongoose.Types.ObjectId} id - inventory id
 * @returns {Object} - inventory details
 */
export const remove = async (id) => {
    return await Inventory.findByIdAndDelete(id)
}