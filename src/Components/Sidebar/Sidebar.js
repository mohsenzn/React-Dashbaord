import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  List,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <Link to="/" className="link">
              <li className="list__item active">
                <LineStyle className="sidebar__icon" />
                Home
              </li>
            </Link>
            <li className="list__item ">
              <Timeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="list__item ">
              <TrendingUp className="sidebar__icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Quick Menu</h3>
          <ul className="sidebar__list">
            <Link to="/users" className="link">
              <li className="list__item">
                <PermIdentity className="sidebar__icon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="list__item">
                <PlayCircleOutline className="sidebar__icon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="list__item">
                <List className="sidebar__icon" />
                Lists
              </li>
            </Link>

            <li className="list__item">
              <BarChart className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="list__item">
              <MailOutline className="sidebar__icon" />
              Mail
            </li>

            <li className="list__item">
              <DynamicFeed className="sidebar__icon" />
              Feedback
            </li>

            <li className="list__item">
              <ChatBubbleOutline className="sidebar__icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Staff</h3>
          <ul className="sidebar__list">
            <li className="list__item">
              <WorkOutline className="sidebar__icon" />
              Manage
            </li>

            <li className="list__item">
              <Timeline className="sidebar__icon" />
              Analytics
            </li>

            <li className="list__item">
              <Report className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
