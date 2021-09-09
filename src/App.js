import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.css";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductsList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          {user && (
            <>
              <Navbar />
              <div className="container">
                <Sidebar />
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/movies">
                  <ProductList />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
              </div>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
