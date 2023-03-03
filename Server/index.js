import express from 'express';
import dotenv from 'dotenv'
import inventoryRouter from './routes/inventory.js'
import morgan from 'morgan';
import cors from 'cors';
import { connectToDB } from './config/db.js';
import { errorHandling } from './middleware/errorHandling.js';
dotenv.config({ path: './config.env' })
const app = express()
app.use(express.json())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// connect to db
connectToDB()

// router
app.use('/inventory', inventoryRouter)



// global error handling middleware
app.use(errorHandling)



// create server and connected to localhost
app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost :${process.env.PORT}`)
})