import { rest } from "msw";

export const handlers = [
  rest.get("http://192.168.33.10:8080/api/todo/", (req, res, ctx) =>
    res(ctx.status(500))
  ),
];
