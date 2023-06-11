import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegistrationForm1 from "./components/RegistrationForm1";
import LoginPage from "./components/LoginPage";
import Carousel from "./components/Carousel";
import Admin from "./components/Admin";

import Header from "./components/Header";
import Dashboard from "./components/dashboard";

// import './Admin.js';

function App() {
  return (
    <div>
        <div>
        <Routes>
        <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
        </div>
        <div>
        <Header />
      <Routes>
        <Route path="/" Component={Carousel}>
          {/* <Carousel/> */}
          {/* <Admin/> */}
        </Route>
        <Route path="/register" Component={RegistrationForm1} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/admin" Component={Admin}></Route>
        
        
      </Routes>
        </div>
      
    </div>
  );
}

export default App;