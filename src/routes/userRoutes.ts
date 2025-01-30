import express from "express";
import employeeController from "../controller/employeeController";
import AuthMiddleware from "../middleware/authentication";
import validationMiddleware from "../middleware/validation"
const userRoutes = express.Router();
const userController = new employeeController();
const AuthMiddle = new AuthMiddleware();
const validData = new validationMiddleware();
userRoutes.get("/", userController.getEmployees as any);
userRoutes.get(
  "/:id",
  validData.validateId as any,
  AuthMiddle.userExistbyId as any,
  userController.getOneEmployee as any
);
userRoutes.post(
  "/",
  AuthMiddle.authenticateUser as any,
  validData.validateDataUser as any,
  userController.createEmployee as any
);
userRoutes.put(
  "/:id",
  AuthMiddle.authenticateUser as any,
  validData.validateId as any,
  validData.validateDataUser as any,
  AuthMiddle.userExistbyId as any,
  userController.updateEmployee as any
);
userRoutes.delete(
  "/:id",
  AuthMiddle.authenticateUser as any,
  validData.validateId as any,
  AuthMiddle.userExistbyId as any,
  userController.deleteEmployee as any
);

export default userRoutes;
