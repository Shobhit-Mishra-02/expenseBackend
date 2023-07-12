import { Router } from "express";
import addUser from "../controllers/user/addUser";
import validateUser from "../controllers/user/validateUser";
import updateUser from "../controllers/user/updateUser";

const userRouter = Router();

userRouter.post("/add", addUser);
userRouter.post("/validate", validateUser);
userRouter.post("/update/:id", updateUser);

export default userRouter;
