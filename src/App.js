import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.css";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
