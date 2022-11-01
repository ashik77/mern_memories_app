import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRoute from "./src/routers/posts.router.js";
import userRoute from "./src/routers/user.router.js";

dotenv.config({ path: ".env" });

const app = express();

app.set("port", process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

//app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);

export default app;
