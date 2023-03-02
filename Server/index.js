import express from 'express';
import dotenv from 'dotenv'
import inventoryRouter from './routes/inventory.js'
import { connectToDB } from './utils/db.js';
dotenv.config({ path: './config.env' })
const app = express()


// connect to db
connectToDB()

// router
app.use('/inventory', inventoryRouter)

// create server and connected to localhost
app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost :${process.env.PORT}`)
})

