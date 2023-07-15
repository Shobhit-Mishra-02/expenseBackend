import { Router } from "express";
import addUser from "../controllers/user/addUser";
import validateUser from "../controllers/user/validateUser";
import updateUser from "../controllers/user/updateUser";
import getUserById from "../controllers/user/getUserById";

const userRouter = Router();

userRouter.post("/add", addUser);
userRouter.post("/validate", validateUser);
userRouter.post("/update/:id", updateUser);
userRouter.get("/get/:id", getUserById);

export default userRouter;
