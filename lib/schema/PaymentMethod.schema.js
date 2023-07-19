import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
});

const PaymentMethod = mongoose.model("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;
