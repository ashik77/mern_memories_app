import express from "express";
import { signIn, signUp } from "./../controllers/user.controller.js";

const router = express.Router();

router.post("/users/signup", signUp);

router.post("/users/signin", signIn);

export default router;
