import { Router } from "express";

const messages = [
  {
    text: "First!",
    user: "ckyzo",
    added: new Date(),
  },
  {
    text: "Second?!",
    user: "chanpan",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

export { indexRouter };
