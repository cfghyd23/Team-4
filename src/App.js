import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Header from './components/Header';
import RegistrationForm1 from './components/RegistrationForm1';
import LoginPage from './components/LoginPage';
import Carousel from './components/Carousel';
import Admin from './components/Admin';

// import './Admin.js';


function App() {
  return (
    <div>
    <Header title="Marpu Foundation"/>
      <Routes>
    <Route path='/' Component={Carousel}>
      {/* <Carousel/> */}
      {/* <Admin/> */}
    </Route>
    <Route path="/register" Component={RegistrationForm1}/>
    <Route path="/login" Component={LoginPage}/>
    <Route path='/admin' Component={Admin}></Route>
    </Routes>
    
    
    </div>
  );
}

export default App;
