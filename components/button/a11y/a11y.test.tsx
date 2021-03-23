import { A11y } from ".";
import { render, fireEvent, screen } from "@testing-library/react";

describe("A11y button", () => {
  test("it defaults to button[type=button]", async () => {
    render(<A11y data-testid="a11y-button">Hello world</A11y>);
    const button = await screen.findByTestId("a11y-button");
    expect(button.getAttribute("type")).toBe("button");
  });

  test("it accepts button[type] overrides", async () => {
    render(
      <A11y type="submit" data-testid="a11y-button">
        Hello world
      </A11y>
    );
    const button = await screen.findByTestId("a11y-button");
    expect(button.getAttribute("type")).toBe("submit");
  });

  test("it responds to onClick", async () => {
    const fn = jest.fn();
    render(
      <A11y type="submit" data-testid="a11y-button" onClick={fn}>
        Hello world
      </A11y>
    );

    const button = await screen.findByTestId("a11y-button");
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
