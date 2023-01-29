import { Routes, Route } from "react-router-dom";
import { HomePage, BookingPage, BookingConfirmedPage } from "../../pages";
import './Main.css';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations-confirmed" element={<BookingConfirmedPage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};
