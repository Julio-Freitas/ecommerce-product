import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Menu from "..";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe("Menu", () => {
  it("Should be Menu", () => {
    const {container}= renderWithRouter(<Menu />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
