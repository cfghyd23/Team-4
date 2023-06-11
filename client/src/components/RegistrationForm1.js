// import React, { useState } from 'react';

// function RegistrationForm1() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedProject, setSelectedProject] = useState('');

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleProjectChange = (e) => {
//     setSelectedProject(e.target.value);
//   };

//   return (
//     <div className="form">
//       <div className="form-body">
//         <div className="username">
//           <label className="form__label" htmlFor="Name">
//             Name
//           </label>
//           <input
//             className="form__input"
//             type="text"
//             id="Name"
//             placeholder="Name"
//           />
//         </div>
        
//         <div className="email">
//           <label className="form__label" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="form__input"
//             placeholder="Email"
//           />
//         </div>
        
        
//         {/* Add phone number field */}
//         <div className="phone-number">
//           <label className="form__label" htmlFor="phoneNumber">
//             Phone Number
//           </label>
//           <input
//             className="form__input"
//             type="tel"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//           />
//         </div>
//         {/* Add projects dropdown */}
//         <div className="projects">
//           <label className="form__label" htmlFor="projects">
//             Projects
//           </label>
//           <select
//             className="form__input"
//             id="projects"
//             value={selectedProject}
//             onChange={handleProjectChange}
//           >
//             <option value="">Select a project</option>
//             <option value="project1">Environmemtal Substainalibility</option>
//             <option value="project2">Economic Development</option>
//             <option value="project3">Social development</option>
//             <option value="project3">Partner for goals</option>

//           </select>
//         </div>
//       </div>
//       <div className="footer">
//         <button type="submit" className="btn">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm1;
import React, { useState } from 'react';

const RegistrationForm1 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const footerStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  return (
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
            <option value="project1">Environmental Sustainability</option>
            <option value="project2">Economic Development</option>
            <option value="project3">Social Development</option>
            <option value="project3">Partnership for Goals</option>
          </select>
        </div>
      </div>
      <div style={footerStyle}>
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm1;
