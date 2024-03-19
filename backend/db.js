import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log("mongodb connected", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
