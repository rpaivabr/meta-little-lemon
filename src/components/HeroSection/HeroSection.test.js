import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HeroSection } from "./HeroSection";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate
}))

test("Renders the HeroSection component", () => {
    render(<HeroSection />, { wrapper: BrowserRouter });
  });

test("Navigate to reservations when click Reserve a table button", () => {
  render(<HeroSection />, { wrapper: BrowserRouter });
  const button = screen.getByText(/Reserve a table/i);
  
  fireEvent.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledWith('/reservations');
});
