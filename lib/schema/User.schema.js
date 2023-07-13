import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // mendatory
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // optional
  name: String,
  bio: String,
  salaryPerMonth: Number,
  occupation: String,
});

const User = mongoose.model("User", userSchema);

export default User;
