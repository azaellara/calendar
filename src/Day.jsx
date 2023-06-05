import React from "react";

function Day({ day }) {
  const isCurrentDay = day === new Date().getDate();
  const className = `day ${isCurrentDay ? "current-day" : ""}`;

  return <div className={className}>{day}</div>;
}

export default Day;
