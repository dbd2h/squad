import express, { application } from "express";
import morgan from "morgan";
import session from "express-session";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded());
app.use(
  session({
    secret: "hello",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

export default app;
