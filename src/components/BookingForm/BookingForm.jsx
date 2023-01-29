import { useState } from "react";
import { Button } from "../Button/Button";
import image from "../../assets/images/restaurant.jpg";
import "./BookingForm.css";

export const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChangeTime = (event) => setTime(event.target.value);
  const handleChangeGuests = (event) => setGuests(event.target.value);
  const handleChangeOccasion = (event) => setOccasion(event.target.value);
  const enableSubmit = date && time && guests && occasion;

  const handleChangeDate = (event) => {
    setDate(event.target.value);
    updateTimes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <>
      <section className="booking">
        <div className="container">
          <div className="booking-image">
            <img src={image} alt="logo" className="image" />
          </div>
          <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              data-testid="date"
              value={date}
              onChange={handleChangeDate}
            />

            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              data-testid="time"
              value={time}
              onChange={handleChangeTime}
            >
              <option></option>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              data-testid="guests"
              value={guests}
              onChange={handleChangeGuests}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              data-testid="occasion"
              value={occasion}
              onChange={handleChangeOccasion}
            >
              <option></option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>

            <Button type="submit" disabled={!enableSubmit}>
              Make your reservation
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
