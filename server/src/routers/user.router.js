import express from "express";
import {
  googleLogin,
  signIn,
  signUp,
} from "./../controllers/user.controller.js";

const router = express.Router();

router.post("/users/signup", signUp);

router.post("/users/signin", signIn);

router.post("/users/googlelogin", googleLogin);

export default router;
