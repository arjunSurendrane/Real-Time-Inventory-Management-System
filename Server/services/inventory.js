import Inventory from "../models/inventory.js"

export const getAllInventory = async () => {
    return await Inventory.find()
}

export const getById = async (id) => {
    return await Inventory.findById(id)
}

export const create = async (data) => {
    return await Inventory.create(data)
}

export const update = async (id, data) => {
    return await Inventory.findByIdAndUpdate(id, data)
}

export const remove = async (id) => {
    return await Inventory.findByIdAndDelete(id)
}