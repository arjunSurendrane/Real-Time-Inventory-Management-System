import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Quantity: Number,
    Price: Number,
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
})


const Inventory = mongoose.model('Inventory', inventorySchema, 'Inventory')
export default Inventory
