import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
