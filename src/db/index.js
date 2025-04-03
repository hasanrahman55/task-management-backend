import mongoose from "mongoose";

const connectDB = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb conncected");
  } catch (error) {
    console.log("mongodb connection failed");
    process.exit(1);
  }
};

export default connectDB;
