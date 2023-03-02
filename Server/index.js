import express from 'express';
import dotenv from 'dotenv'
import inventoryRouter from './routes/inventory.js'
dotenv.config({ path: './config.env' })
const app = express()


app.use('/inventory', inventoryRouter)


app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost :${process.env.PORT}`)
})

