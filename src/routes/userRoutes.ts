
import express from "express";
import  employeeController  from "../controller/employeeController"; // Adjust path as needed

const userRoutes = express.Router();

const userController = new employeeController();

userRoutes.get("/", (req, res) => userController.getEmployees(req, res) as any);
userRoutes.get("/:id", (req, res) => userController.getOneEmployee(req, res) as any);
userRoutes.post("/", (req, res) => userController.createEmployee(req, res) as any);
userRoutes.put("/:id", (req, res) => userController.updateEmployee(req, res) as any);
userRoutes.delete("/:id", (req, res) => userController.deleteEmployee(req, res) as any);



export default userRoutes;
