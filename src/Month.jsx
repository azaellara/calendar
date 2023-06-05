import React from "react";
import Day from "./Day";
import { getDaysInMonth, getDayOfWeek } from "./utils";

function Month({ month }) {
  const daysInMonth = getDaysInMonth(month);
  const firstDayOfWeek = getDayOfWeek(month, 1);

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<Day key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<Day key={i} day={i} />);
    }

    return days;
  };

  return (
    <div className="border border-black p-3 rounded">
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
}

export default Month;
