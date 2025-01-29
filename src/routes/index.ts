import express from "express";
import userRoutes from "./userRoutes";

const router = express.Router();

router.use("/employees",userRoutes)

export default router;