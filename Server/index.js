import express from "express";
import dotenv from "dotenv";
import inventoryRouter from "./routes/inventory.js";
import morgan from "morgan";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import { errorHandling } from "./middleware/errorHandling.js";
import connectToLocalhost from "./config/server.js";
import { createServer } from "http";
import { Server } from "socket.io";
import AppError from "./utils/AppError.js";
import socket from "./config/socket.js";
dotenv.config({ path: "./example.env" });
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: { origin: [`http://127.0.0.1:5173`] },
});

/**
 * Connect to db
 */
connectToDB();

/**
 * Router
 */
app.use("/api/v1/inventory", inventoryRouter);
app.use("/*", (req, res, next) => next(new AppError("page not foung", 404)));

/**
 * Create server
 */
export const websocketServer = new socket(io);
connectToLocalhost(httpServer);

/**
 * Global error handling middleware
 */
app.use(errorHandling);
