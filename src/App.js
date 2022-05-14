import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Forms from "./login/Forms";
import Signup from "./pages/signup";
import About from "./pages/about";
import Form from "./source/Form";
import UserProfileForm from "./pages/user-profile-form";
import Result from "./pages/results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
        <Route path="/user-profile-form" element={<UserProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App;
