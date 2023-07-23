import { json, urlencoded } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import router from "./router/app.route";
import userRouter from "./router/user.route";
import categoryRouter from "./router/category.route";
import expenseRouter from "./router/expense.route";
import paymentMethodRouter from "./router/paymentMethod.route";
import utilsRouter from "./router/utils.route";

dotenv.config();

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use("/", router);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/expense", expenseRouter);
app.use("/paymentMethod", paymentMethodRouter);
app.use("/utils", utilsRouter);

export default app;
