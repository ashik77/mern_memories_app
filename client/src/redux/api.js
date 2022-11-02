import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);

export const googleLogin = (result) => API.post("/users/googlelogin", result);
