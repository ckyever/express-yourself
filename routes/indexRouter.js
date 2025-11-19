import { Router } from "express";
import user from "../models/user.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("username");
});

indexRouter.post("/username", (req, res) => {
  user.username = req.body.username;
  res.redirect("/chat");
});

export { indexRouter };
