import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "@codemanic/db";

const authController = {
  registerController: async (req: Request, res: Response) => {
    // registration logic
    const { name, email, password } = req.body;
    if (!name || !email || !password || !password.length) {
      res.status(400).send({ message: "please enter a valid credentials." });
    }

    res.status(200).send({ message: "Register routes is working" });
  },
  loginController: (req: Request, res: Response) => {
    // login logic
    res.status(200).send({ message: "Login routes is working" });
  },
  newController: (req: Request, res: Response) => {},
};

export default authController;
