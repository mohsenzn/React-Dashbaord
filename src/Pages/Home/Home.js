import React, { useMemo, useState, useEffect } from "react";
import Info from "../../Components/Info/Info";
import Chart from "../../Components/Chart";
import WidgetSm from "../../Components/WidgetsSm/WidgetSm";
import WidgetLg from "../../Components/WidgetsLg/WidgetLg";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getState = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "good eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzRiMWU0YzUwZjU0ZmFjM2NiZTJmZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDg0MzQxNiwiZXhwIjoxNjMxMjc1NDE2fQ.s8iaz-NYfev79AjvP_4BXbw8d-jnVUoZkTcUxKxCTwg",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getState();
  }, []);
  return (
    <div className="home">
      <Info />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="home__widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
