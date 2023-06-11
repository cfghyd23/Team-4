import "./App.css";
import { Route, Switch } from "react-router-dom";

import RegistrationForm1 from "./components/RegistrationForm1";
import LoginPage from "./components/LoginPage";
import Carousel from "./components/Carousel";
import Admin from "./components/Admin";
import DashNav from "./components/Dashboard/DashNav";
import Overview from "./components/Dashboard/Overview";
import Reward from "./components/Dashboard/Reward";

// import './Admin.js';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/thankyou" exact>
          <>
            <h1 className="w-full text-center p-16 bg-green-300 bg-opacity-30 rounded-md">
              Thank you for registering!
            </h1>
          </>
        </Route>
        <Route exact path="/">
          <Carousel />
        </Route>
        <Route path="/register">
          <RegistrationForm1 />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/dashboard">
          <>
            <DashNav />
            <Route exact path={"/dashboard"}>
              <Overview />
            </Route>
            <Route path="/dashboard/rewards">
              <Reward />
            </Route>
            <Route path="/dashboard/alumni">Alumni</Route>
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
