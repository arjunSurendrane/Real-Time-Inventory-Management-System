import express from 'express';
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
const app = express()



app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost :${process.env.PORT}`)
})

