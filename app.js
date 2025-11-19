import express from "express";
import path from "node:path";

import { indexRouter } from "./routes/indexRouter.js";
import { chatRouter } from "./routes/chatRouter.js";

const currentDirectory = process.cwd();
const app = express();

app.set("views", path.join(currentDirectory, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/chat", chatRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Last updated ${new Date().toISOString()}`);
});
