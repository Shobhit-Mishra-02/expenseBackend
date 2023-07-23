import { Router } from "express";
import getCategoryDistribution from "../controllers/utils/getCategoryDistribution";
import getActivityCount from "../controllers/utils/getActivityCount";

const utilsRouter = Router();

utilsRouter.get("/category/distribution", getCategoryDistribution);
utilsRouter.get("/activityCount", getActivityCount);

export default utilsRouter;
