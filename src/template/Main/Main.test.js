import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";

test("Renders the Main component", () => {
  render(<Main />, { wrapper: BrowserRouter });
});
