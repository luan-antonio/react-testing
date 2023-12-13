import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Luan" />);
  const text = screen.getByText("Hello Luan");
  expect(text).toBeInTheDocument();
});
