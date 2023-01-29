import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BookingForm } from "../../components";
import { fetchAPI, submitAPI } from "../../Api";

export const BookingPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initializeTimes());

  function reducer(_state, action) {
    if (action.type === "getAvailableTimes") {
      return fetchAPI(new Date(action.date));
    }
  }

  function initializeTimes() {
    return fetchAPI(new Date());
  }

  function updateTimes(date) {
    dispatch({ type: "getAvailableTimes", date });
  }

  function submitForm(formData) {
    submitAPI(formData) && navigate('/reservations-confirmed');
  }

  return (
    <BookingForm
      availableTimes={state}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );
};
