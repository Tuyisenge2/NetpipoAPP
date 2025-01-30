
import express from "express";
import AuthenticationController from "../controller/authController";
const authRoutes = express.Router();
const auth = new AuthenticationController();

authRoutes.post("/", auth.generateToken as any);


export default authRoutes;
