import mongoose from 'mongoose';

/**
 * Connect to Mongodb
 * @description - this function is used to connect express server with moongodb using mongoose
 */
export const connectToDB = async () => {
    try {
        const db = process.env.MONGODB_KEY
        await mongoose.connect(db)
        console.log('connected to mongodb')
    } catch (error) {
        console.log(`error : ${error}`)
    }
}
