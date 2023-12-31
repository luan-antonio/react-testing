import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Luan" />);
    const text = screen.getByText("Hello Luan");
    expect(text).toBeInTheDocument();
  });
});
