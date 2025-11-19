import { Router } from "express";
import { messages, postMessage } from "../models/messasges.js";
import user from "../models/user.js";

const chatRouter = Router();

chatRouter.get("/", (req, res) => {
  res.render("chat", { username: user.username, messages: messages });
});

chatRouter.post("/new", (req, res) => {
  postMessage(req.body.messageText, user.username);
  res.redirect("/chat");
});

export { chatRouter };
