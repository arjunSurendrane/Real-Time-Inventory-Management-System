import mongoose from 'mongoose';


export const connectToDB = async () => {
    try {
        const db = process.env.MONGODB_KEY
        await mongoose.connect(db)
        console.log('connected to mongodb')
    } catch (error) {
        console.log(`error : ${error}`)
    }

}
