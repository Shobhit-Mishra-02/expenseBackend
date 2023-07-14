import { Router } from "express";
import addExpense from "../controllers/expense/addExpense";
import getExpense from "../controllers/expense/getExpense";

const expenseRouter = Router();

expenseRouter.post("/add", addExpense);
expenseRouter.get("/get/:id", getExpense);

export default expenseRouter;
