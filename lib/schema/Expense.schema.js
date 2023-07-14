import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  date: { type: Date, required: true },
  category: { type: String, required: true },

  paymentMethod: String,
  description: String,
  receipt: Boolean,
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
