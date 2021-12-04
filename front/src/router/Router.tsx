import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Top } from "../pages/Top";
import { Todo } from "../pages/Todo";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
});
