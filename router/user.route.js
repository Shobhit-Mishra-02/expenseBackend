import { Router } from "express";
import addUser from "../controllers/user/addUser";
import validateUser from "../controllers/user/validateUser";
import updateUser from "../controllers/user/updateUser";
import getUserById from "../controllers/user/getUserById";
import getUserByEmail from "../controllers/user/getUserByEmail";

const userRouter = Router();

userRouter.post("/add", addUser);
userRouter.post("/validate", validateUser);
userRouter.post("/update/:id", updateUser);
userRouter.get("/get/:id", getUserById);
userRouter.get("/get/email/:email", getUserByEmail);

export default userRouter;
