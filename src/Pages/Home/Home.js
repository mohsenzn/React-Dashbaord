import React from "react";
import Info from "../../Components/Info/Info";
import Chart from "../../Components/Chart";
import WidgetSm from "../../Components/WidgetsSm/WidgetSm";
import WidgetLg from "../../Components/WidgetsLg/WidgetLg";

import { userData } from "../../Data";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Info />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home__widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
