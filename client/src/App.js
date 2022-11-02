import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import { setUser } from "./redux/features/authSlice";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
