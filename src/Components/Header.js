import React from 'react'

const Header = (_props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{_props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Marpu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Team</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Registrations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Environmental Sustainability</a></li>
                  <li><a className="dropdown-item" href="#">Economic Development</a></li>
                  
                  <li><a className="dropdown-item" href="#">Social development</a></li>
                  
                  <li><a className="dropdown-item" href="#">Partnership for goals</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Header
