import { Router } from "express";
import addExpense from "../controllers/expense/addExpense";
import getExpense from "../controllers/expense/getExpense";
import updateExpense from "../controllers/expense/updateExpense";
import addManyExpenses from "../controllers/expense/addManyExpense";

const expenseRouter = Router();

expenseRouter.post("/add", addExpense);
expenseRouter.get("/get/:email", getExpense);
expenseRouter.post("/update/:id", updateExpense);
expenseRouter.post("/insertMany", addManyExpenses);

export default expenseRouter;
