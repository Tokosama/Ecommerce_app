import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`connected to MONGODB: ${conn.connection.host}`);
  } catch (error) {

    console.error("MONGODB connection error")
    process.exit(1)
  }
};
