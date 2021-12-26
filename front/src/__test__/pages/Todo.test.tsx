import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
// import { server } from "../../mocks/server";
import { Todo } from "../../pages/Todo";
import { Top } from "../../pages/Top";

// const server = setupServer(
//   rest.get(`${process.env.REACT_APP_API_V1_URL}/api/todo/`, (req, res, ctx) => {
//     return res(ctx.status(500));
//   }),
// );

test('List up Todos', async () => {
  // server.resetHandlers(
  //   rest.get(`${process.env.REACT_APP_API_V1_URL}/api/todo/`, (req, res, ctx) =>
  //     res(ctx.status(500))
  //   ),
  // );
  act(() => {
    render(<Todo />);
  })
  screen.debug();
});
