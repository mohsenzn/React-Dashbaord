import React, { useState, useEffect } from "react";
import "./WidgetsSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
const WidgetSm = () => {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "good eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzRiMWU0YzUwZjU0ZmFjM2NiZTJmZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDg0MzQxNiwiZXhwIjoxNjMxMjc1NDE2fQ.s8iaz-NYfev79AjvP_4BXbw8d-jnVUoZkTcUxKxCTwg",
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUser();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSm__title">New Join Members</span>
      <ul className="widgetSm__list">
        {newUser.map((user) => (
          <li className="widgetSm__item">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSm__img"
            />
            <div className="widgetSm__user">
              <span className="widgetSmUser__username">{user.username}</span>
            </div>
            <button className="widgetSm__button">
              <Visibility className="widgetSm__icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
