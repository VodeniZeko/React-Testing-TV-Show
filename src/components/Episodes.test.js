import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

test("Episodes cmoponent renders correctly", () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);
  expect(queryAllByTestId("episodes-test")).toHaveLength(0);

  // rerender(<Episodes episodes={}/>)
});
