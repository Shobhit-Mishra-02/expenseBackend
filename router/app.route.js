import { Router } from "express";
import { greeting } from "../controllers/greeting";

const router = Router();

router.get("/", greeting);

export default router;
