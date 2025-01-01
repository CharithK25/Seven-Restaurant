import React, { useState } from "react";
import "./Datepicker.css";

const DatePicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month: number, year: number): number =>
    new Date(year, month + 1, 0).getDate();

  const generateCalendarDays = (): (number | null)[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);

    const calendarDays = Array(firstDayOfMonth).fill(null); // Fill with empty days
    for (let i = 1; i <= totalDays; i++) {
      calendarDays.push(i);
    }
    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const formatMonthYear = (): string =>
    currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const handleDateClick = (day: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{formatMonthYear()}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="date-picker-grid">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
          <div key={index} className="date-picker-day-label">
            {day}
          </div>
        ))}
        {generateCalendarDays().map((day, index) =>
          day ? (
            <div
              key={index}
              className={`date-picker-day ${
                day === currentDate.getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ) : (
            <div key={index} className="date-picker-empty" />
          )
        )}
      </div>
    </div>
  );
};

export default DatePicker;