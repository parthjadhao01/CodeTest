import express from "express";
import router from "./router.js";

const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
