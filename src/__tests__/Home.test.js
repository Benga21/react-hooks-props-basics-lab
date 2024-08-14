import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home"; 
test("uses the 'name' and 'city' props to display the correct text", () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);
  const liza = screen.getByText("Liza is a Web Developer from New York");
  expect(liza).toBeInTheDocument();
  render(<Home name="Duane" city="Queens" color="firebrick" />);
  const duane = screen.getByText("Duane is a Web Developer from Queens");
  expect(duane).toBeInTheDocument();
});
test("uses the 'color' prop to set the inline style color of the h1", () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);
  const h1 = screen.getByRole('heading', { level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle({ color: 'firebrick' });
});
