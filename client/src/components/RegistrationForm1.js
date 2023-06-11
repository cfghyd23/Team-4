// export default RegistrationForm1;
import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const RegistrationForm1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      gender,
      phonenumber: phoneNumber,
      campaingname: selectedProject,
    };
    console.log(body);

    axios.defaults.baseURL = "http://localhost:8000";

    axios
      .post("/auth/register", body)
      .then((res) => {
        console.log(res);
        console.log("Registered");

        window.location.href = "/thankyou";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const footerStyle = {
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <>
      <Header />

      <h4 className="my-6 mx-auto w-full text-center">
        Register as a Volunteer!
      </h4>
      <p className="my-6 mx-auto w-full text-center">
        We welcome interns who can help us raise funds. Fill in the information
        and we will get in touch with you shortly.
      </p>
      <div style={formStyle}>
        <div className="form-body">
          <div className="username">
            <label style={labelStyle} htmlFor="Name">
              Name
            </label>
            <input
              style={inputStyle}
              type="text"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="email">
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              style={inputStyle}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Add phone number field */}
          <div className="phone-number">
            <label style={labelStyle} htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              style={inputStyle}
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>

          <div className="gender">
            <label style={labelStyle} htmlFor="gender">
              Gender
            </label>
            <select
              style={inputStyle}
              id="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
          </div>

          {/* Add projects dropdown */}
          <div className="projects">
            <label style={labelStyle} htmlFor="projects">
              Projects
            </label>
            <select
              style={inputStyle}
              id="projects"
              value={selectedProject}
              onChange={handleProjectChange}
            >
              <option value="">Select a project</option>
              <option value="EnvironmentalSustainability">
                Environmental Sustainability
              </option>
              <option value="EconomicDevlopment">Economic Development</option>
              <option value="SocialDevelopment">Social Development</option>
              <option value="PartnershipforGoals">Partnership for Goals</option>
            </select>
          </div>
        </div>
        <div style={footerStyle}>
          <button type="submit" style={buttonStyle} onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm1;
