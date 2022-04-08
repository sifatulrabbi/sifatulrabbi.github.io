import emailRouter from "./email.router";
import {Router} from "express";

const router = Router();

router.use("/email", emailRouter);

export default router;
