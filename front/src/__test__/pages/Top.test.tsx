import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Router } from "../../router/Router";
import { Top } from "../../pages/Top";

afterEach(() => cleanup());

describe("First Rendering", () => {
  it("render Top Page", () => {
    render(
      <BrowserRouter>
        <Router>
          <Top />
        </Router>
      </BrowserRouter>
    );

    const topTitle = screen.queryByText("トップ画面です");
    expect(topTitle).not.toBeNull();
  });
});
