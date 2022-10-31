import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRoute from "./src/routers/posts.router.js";

dotenv.config({ path: ".env" });

const app = express();

app.set("port", process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.use("/api/v1", postRoute);

export default app;
