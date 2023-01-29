import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookingForm } from "../../components";
import { BookingPage } from "./BookingPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Renders the BookingPage component", () => {
  render(<BookingPage />, { wrapper: BrowserRouter });
});

test("Navigate to reservations-confirmed when submitForm triggers", () => {
  render(
    <BookingPage>
      <BookingForm />
    </BookingPage>,
    { wrapper: BrowserRouter }
  );
  const button = screen.getByText(/Make your reservation/i);
  const inputTime = screen.getByTestId('time');
  const inputGuests = screen.getByTestId('guests');
  const inputOccasion = screen.getByTestId('occasion');

  fireEvent.change(inputTime, { target: { value: "20:00" }});
  fireEvent.change(inputGuests, { target: { value: 1 }});
  fireEvent.change(inputOccasion, { target: { value: 'Birthday' }});
  fireEvent.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/reservations-confirmed");
});
