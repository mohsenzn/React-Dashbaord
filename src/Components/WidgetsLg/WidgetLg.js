import React from "react";
import "./WidgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLg__button ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLg__title">Latest transactions</h3>
      <table className="widgetLg__table">
        <tbody>
          <tr className="widgetLg__tr">
            <th className="widgetLg_th">Customer</th>
            <th className="widgetLg_th">Date</th>
            <th className="widgetLg_th">Amount</th>
            <th className="widgetLg_th">Status</th>
          </tr>
          <tr className="widgetLg__tr">
            <td className="widgetLg__user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLg__img"
              />
              <span className="widgetLg__name">Susan Carol</span>
            </td>
            <td className="widgetLg__date">2 Jun 2021</td>
            <td className="widgetLg__amount">$122.00</td>
            <td className="widgetLg__status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLg__tr">
            <td className="widgetLg__user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLg__img"
              />
              <span className="widgetLg__name">Susan Carol</span>
            </td>
            <td className="widgetLg__date">2 Jun 2021</td>
            <td className="widgetLg__amount">$122.00</td>
            <td className="widgetLg__status">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLg__tr">
            <td className="widgetLg__user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLg__img"
              />
              <span className="widgetLg__name">Susan Carol</span>
            </td>
            <td className="widgetLg__date">2 Jun 2021</td>
            <td className="widgetLg__amount">$122.00</td>
            <td className="widgetLg__status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLg__tr">
            <td className="widgetLg__user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLg__img"
              />
              <span className="widgetLg__name">Susan Carol</span>
            </td>
            <td className="widgetLg__date">2 Jun 2021</td>
            <td className="widgetLg__amount">$122.00</td>
            <td className="widgetLg__status">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
