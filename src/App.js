import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Forms from "./login/Forms";
import About from "./pages/about";
import Form from "./source/Form";
import UserProfileForm from "./pages/user-profile-form";
import Result from "./pages/results";
import Classes from "./pages/classes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/results" element={<Result />} />
        <Route path="/user-profile-form" element={<UserProfileForm />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  );
}

export default App;
