import React, { useState } from "react";
import Month from "./Month";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const nextMonth = new Date(prevMonth);
      nextMonth.setMonth(prevMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const nextMonth = new Date(prevMonth);
      nextMonth.setMonth(prevMonth.getMonth() - 1);
      return nextMonth;
    });
  };

  return (
    <div className="calendar">
      <div className="header">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={prevMonth}
        >
          Prev
        </button>
        <h2>
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={nextMonth}
        >
          Next
        </button>
      </div>
      <Month month={currentMonth} />
    </div>
  );
}

export default Calendar;
