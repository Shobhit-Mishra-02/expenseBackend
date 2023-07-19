import { Router } from "express";
import getPaymentMethod from "../controllers/paymentMethod/getPaymentMethod";
import addPaymentMethod from "../controllers/paymentMethod/addPaymentMethod";

const paymentMethodRouter = Router();

paymentMethodRouter.get("/get", getPaymentMethod);
paymentMethodRouter.post("/add", addPaymentMethod);

export default paymentMethodRouter;
