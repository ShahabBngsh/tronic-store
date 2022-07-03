import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config()

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`)
    // console.log(`db: ${conn.connection.db}`)
  } catch (err) {
    console.log(`ERROR: ${err.message}`)
    process.exit(1)
  }
}

export default connectDb