import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";

test("Renders the Nav component", () => {
  render(<Nav />, { wrapper: BrowserRouter });
});
