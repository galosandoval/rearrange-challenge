import { fireEvent, render, screen } from "@testing-library/react";
import Controls from "./Controls";

const setup = () => {
  const utils = render(<Controls />);

  const input = {
    shuffle: screen.getByLabelText("random"),
    reset: screen.getByLabelText("shuffle"),
    save: screen.getByLabelText("save"),
    textarea: screen.getByRole("textbox")
  };

  return {
    input,
    ...utils
  };
};

test("text area input", () => {
  const { input } = setup();
  fireEvent.change(input.textarea, { target: { value: "9, 8, 7, 6, 5, 4, 3, 2, 1" } });
  expect(input.textarea.value).toBe("9, 8, 7, 6, 5, 4, 3, 2, 1");
});

test("does not shuffle on invalid input", async () => {
  const { input } = setup();
  fireEvent.change(input.textarea, { target: { value: "9 8, 7, 6, 5, 4, 3, 2, 1" } });
  fireEvent.click(input.shuffle);
  expect(input.textarea.value).toBe("9 8, 7, 6, 5, 4, 3, 2, 1");
});

test("does not reset on invalid input", async () => {
  const { input } = setup();
  fireEvent.change(input.textarea, { target: { value: "9 8, 7, 6, 5, 4, 3, 2, 1" } });
  fireEvent.click(input.reset);
  expect(input.textarea.value).toBe("9 8, 7, 6, 5, 4, 3, 2, 1");
});
