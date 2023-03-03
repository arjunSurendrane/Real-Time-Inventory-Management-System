import express from 'express';
import dotenv from 'dotenv'
import inventoryRouter from './routes/inventory.js'
import morgan from 'morgan';
import cors from 'cors';
import { connectToDB } from './config/db.js';
import { errorHandling } from './middleware/errorHandling.js';
import connectToLocalhost from './config/server.js';
import AppError from './utils/AppError.js';
dotenv.config({ path: './config.env' })
const app = express()
app.use(express.json())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// connect to db
connectToDB()

// router
app.use('/api/v1/inventory', inventoryRouter)
app.use('/*', (req, res, next) => next(new AppError("page not foung", 404)))

// create server and connected to localhost
connectToLocalhost(app)

// global error handling middleware
app.use(errorHandling)