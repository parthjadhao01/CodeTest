import { Router } from "express";
import authController from "./auth.controller.js";

const authRoutes = Router();

authRoutes.post("/register", authController.registerController);
authRoutes.get("/login", authController.loginController);

export default authRoutes;
