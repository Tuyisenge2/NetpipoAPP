
import express from "express";
import  employeeController  from "../controller/employeeController";
import AuthMiddleware from "../middleware/authentication"

const userRoutes = express.Router();
const userController = new employeeController();
const AuthMiddle  = new AuthMiddleware();

userRoutes.get("/", userController.getEmployees as any);
userRoutes.get("/:id", userController.getOneEmployee as any);
userRoutes.post("/", AuthMiddle.authenticateUser as any , userController.createEmployee as any);
userRoutes.put("/:id",AuthMiddle.authenticateUser as any ,  userController.updateEmployee as any);
userRoutes.delete("/:id",AuthMiddle.authenticateUser as any , userController.deleteEmployee as any);



export default userRoutes;
