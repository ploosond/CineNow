import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

async function main() {
  try {
    const conn = await mongoose.connect(mongoDB);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
}

export default main;
