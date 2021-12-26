import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-server";

import { Router } from "../../router/Router";
import { Top } from "../../pages/Top";

afterEach(() => cleanup());

// const signInMock = new MockAdapter(axios);
// signInMock
//   .onPost(`${process.env.REACT_APP_API_V1_URL}/user/token/`);
//   .reply(200, {
//     request: {
//       response: {
//         token: "test token",
//       }
//     }
//   });

describe("First Rendering", () => {
  it("render Top Page", () => {
    render(
      <BrowserRouter>
        <Top />
      </BrowserRouter>
    );

    const topTitle = screen.queryByText("トップ画面です");
    screen.debug();
    expect(topTitle).not.toBeNull();
  });
});

// describe("Login Click", () => {
//   it("Success Login", () => {
//     render(
//       <BrowserRouter>
//         <Router>
//           <Top />
//         </Router>
//       </BrowserRouter>
//     );
//
//     const loginButton = screen.getByDisplayValue("ログイン");
//     expect(loginButton).not.toBeNull();
//   });
// })
