import React, { useState } from "react";
import "./Reservations.css";

const Reservation: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [guests, setGuests] = useState<number>(2);
  const [time, setTime] = useState<string>("19:00");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleGuestsChange = (increment: boolean) => {
    setGuests((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleTimeChange = (increment: boolean) => {
    const [hours, minutes] = time.split(":").map(Number);
    const newTime = new Date();
    newTime.setHours(hours, minutes + (increment ? 30 : -30));
    setTime(newTime.toTimeString().slice(0, 5));
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">The Seven Harrow</h1>

      <div className="reservation-card">
        {/* Date Section */}
        <div className="reservation-field">
          <label>Date</label>
          <div className="reservation-control">
            <button className="control-button" onClick={() => setDate(new Date(new Date(date).setDate(new Date(date).getDate() - 1)).toISOString().split("T")[0])}>
              &lt;
            </button>
            <input type="date" className="reservation-input" value={date} onChange={handleDateChange} />
            <button className="control-button" onClick={() => setDate(new Date(new Date(date).setDate(new Date(date).getDate() + 1)).toISOString().split("T")[0])}>
              &gt;
            </button>
          </div>
        </div>

        {/* Guests Section */}
        <div className="reservation-field">
          <label>Guests</label>
          <div className="reservation-control">
            <button className="control-button" onClick={() => handleGuestsChange(false)}>&lt;</button>
            <span className="reservation-value">{guests}</span>
            <button className="control-button" onClick={() => handleGuestsChange(true)}>&gt;</button>
          </div>
        </div>

        {/* Time Section */}
        <div className="reservation-field">
          <label>Time</label>
          <div className="reservation-control">
            <button className="control-button" onClick={() => handleTimeChange(false)}>&lt;</button>
            <span className="reservation-value">{time}</span>
            <button className="control-button" onClick={() => handleTimeChange(true)}>&gt;</button>
          </div>
        </div>

        {/* Search Button */}
        <button className="reservation-search">Search</button>
      </div>

      <footer className="reservation-footer">Powered by SEVENROOMS</footer>
    </div>
  );
};

export default Reservation;