import { render, screen } from "@testing-library/react";
import { fetchAPI } from "../../Api";
import { BookingForm } from './BookingForm';

test('Renders the BookingForm heading', () => {
    const availableTimes = fetchAPI(new Date());
    render(<BookingForm availableTimes={availableTimes}  />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})