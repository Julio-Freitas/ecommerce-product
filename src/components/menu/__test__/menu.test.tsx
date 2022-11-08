import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Menu from "..";

const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe("Menu", () => {
  it("Should be Menu", () => {
    const { container } = renderWithRouter(<Menu />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should active item menu when change pathname", async () => {
    renderWithRouter(<Menu />)
    const menu = screen.getAllByRole("link");
    const collectionsItem = menu[1];

    await useEvent.click(collectionsItem);
    expect(window.location.pathname).toStrictEqual("/collections");
    expect(collectionsItem).toHaveClass('_container-active_9678f5');
  });
});
