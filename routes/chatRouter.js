import { Router } from "express";
import { messages, postMessage } from "../models/messasges.js";
import user from "../models/user.js";

const getDayMonthYearFromUtcDateTime = (utcDateTime = null) => {
  if (utcDateTime == null) {
    return new Date().toLocaleString("en-AU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  } else {
    return new Date(utcDateTime).toLocaleString("en-AU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }
};

const getChatTimestamp = (utcDateTime) => {
  const chatDate = getDayMonthYearFromUtcDateTime(utcDateTime);
  const currentDate = getDayMonthYearFromUtcDateTime();

  if (chatDate === currentDate) {
    const time = new Date(utcDateTime).toLocaleString("en-AU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return "Today, " + time;
  } else {
    return new Date(utcDateTime).toLocaleString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
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
