import { Router } from "express";
import authRoutes from "./module/auth/auth.routes.js";

const router = Router();

router.post("/", (req, res) => {
  console.log("We are in post request of the server");
  res.status(200).send("post request succeded and router tested succefully");
});

router.use("/auth", authRoutes);

export default router;
