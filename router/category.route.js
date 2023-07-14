import { Router } from "express";
import addCategory from "../controllers/category/addCategory";
import getAllCategories from "../controllers/category/getAllCategories";

const categoryRouter = Router();

categoryRouter.post("/add", addCategory);
categoryRouter.get("/get", getAllCategories);

export default categoryRouter;
