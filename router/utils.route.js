import { Router } from "express";
import getCategoryDistribution from "../controllers/utils/getCategoryDistribution";
import getActivityCount from "../controllers/utils/getActivityCount";
import getYearlyExpenses from "../controllers/utils/getYearlyExpenses";
import getActiveYears from "../controllers/utils/getActiveYears";
import getCategoryExpenses from "../controllers/utils/getCategoryExpenses";

const utilsRouter = Router();

utilsRouter.get("/category/distribution", getCategoryDistribution);
utilsRouter.get("/activityCount", getActivityCount);
utilsRouter.get("/yearlyExpenses/:year", getYearlyExpenses);
utilsRouter.get("/getActiveYears", getActiveYears);
utilsRouter.post("/getcategoryExpenses", getCategoryExpenses);

export default utilsRouter;
