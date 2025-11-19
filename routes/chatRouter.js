import { Router } from "express";
import { messages, postMessage } from "../models/messasges.js";
import user from "../models/user.js";

const getChatTimestamp = (utcDateTime) => {
  return new Date(utcDateTime).toLocaleString("en-AU", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const chatRouter = Router();

chatRouter.get("/", (req, res) => {
  res.render("chat", {
    username: user.username,
    messages: messages,
    getChatTimestamp: getChatTimestamp,
  });
});

chatRouter.post("/new", (req, res) => {
  postMessage(req.body.messageText, user.username);
  res.redirect("/chat");
});

export { chatRouter };
