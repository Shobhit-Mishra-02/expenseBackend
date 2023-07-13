import mongoose from "mongoose";

const connectDB = async () => {
  const connectionURL =
    process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test";
  await mongoose.connect(connectionURL);
};

export default connectDB;
