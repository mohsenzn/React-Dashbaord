import React from "react";
import "./WidgetsSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSm__title">New Join Members</span>
      <ul className="widgetSm__list">
        <li className="widgetSm__item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSmUser__username">Anna Keller</span>
            <span className="widgetSmUser__title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSmUser__username">Anna Keller</span>
            <span className="widgetSmUser__title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSmUser__username">Anna Keller</span>
            <span className="widgetSmUser__title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSmUser__username">Anna Keller</span>
            <span className="widgetSmUser__title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
        <li className="widgetSm__item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm__img"
          />
          <div className="widgetSm__user">
            <span className="widgetSmUser__username">Anna Keller</span>
            <span className="widgetSmUser__title">Software Engineer</span>
          </div>
          <button className="widgetSm__button">
            <Visibility className="widgetSm__icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
