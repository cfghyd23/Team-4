// import React, { useState } from 'react'

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform your login logic, such as making an API request
//     // with the email and password
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Reset the form after submission
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} required />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginPage
import React, { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login logic, such as making an API request
    // with the email and password
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form after submission
    setEmail("");
    setPassword("");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const formStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px", // Added margin top
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px", // Added margin bottom
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h1 style={headingStyle}>Login Page</h1>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
