import { Router } from "express";
import { messages, postMessage } from "../models/messasges.js";

const indexRouter = Router();
indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  postMessage(req.body.messageText, req.body.username);
  res.redirect("/");
});

export { indexRouter };
