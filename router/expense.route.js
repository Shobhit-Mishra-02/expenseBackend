import { Router } from "express";
import addExpense from "../controllers/expense/addExpense";
import getExpense from "../controllers/expense/getExpense";
import updateExpense from "../controllers/expense/updateExpense";

const expenseRouter = Router();

expenseRouter.post("/add", addExpense);
expenseRouter.get("/get/:id", getExpense);
expenseRouter.post("/update/:id", updateExpense);

export default expenseRouter;
