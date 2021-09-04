import React from "react";
import "./Info.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Info = () => {
  return (
    <div className="info">
      <div className="info__item">
        <span className="info__title">Revanue</span>
        <div className="info__moneyContainer">
          <span className="money">$2.365</span>
          <span className="money__rate">
            -11.4 <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Sales</span>
        <div className="info__moneyContainer">
          <span className="money">$4.365</span>
          <span className="money__rate">
            -11.4 <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Cost</span>
        <div className="info__moneyContainer">
          <span className="money">$4.365</span>
          <span className="money__rate">
            -11.4 <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Info;
