import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import AltSidebar from "../components/Sidebar/AltSidebar";
import AltNav from "../components/Navbar/AltNav";

const Form = () => {
  let navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    //TODO: add a link to the user-profile-form
    console.log("this is data ");
    navigate("/user-profile-form");
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
  
  return (
    <>
      <ScrollToTop />
      <AltSidebar isOpen={isOpen} toggle={toggle} />
      <AltNav toggle={toggle} />
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
