import mongoose from "mongoose";

// Housing Expenses, ,Transportation Expenses, Food and Groceries, Personal Care and Health, Debt Payments, Entertainment and Recreation, Education and Professional Development, Utilities and Services, Insurance, Miscellaneous Expenses

// Cash, Credit Card, Debit Card, Mobile Payment

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  userEmail: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },

  paymentMethod: String,
  description: String,
  receipt: Boolean,
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
