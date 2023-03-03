import mongoose from "mongoose";
// Create new schema for inventory collection
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

// Functon for populate supplier data
inventorySchema.pre(/^find/, function (next) {
    this.populate(['supplierId'])
    next()
})
// Create inventory collection
const Inventory = mongoose.model('Inventory', inventorySchema, 'Inventory')
export default Inventory
