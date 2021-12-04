import { memo, VFC, useEffect, useState } from "react";
import axios from "axios";

export const Todo: VFC = memo(() => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const url = `${process.env.REACT_APP_API_V1_URL}/todo/`
    const response = await axios.get(url);
    if(response.data.results) {
      setTodos(response.data.results);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <p>Todo画面です</p>
      { todos ? (
        <ul>
          {todos.map((data) => (
            <li key={data["id"]}>
              title: { "title" in data ? data["title"] : ""}
              &nbsp;
              content: { "content" in data ? data["content"] : ""}
            </li>
          ))}
        </ul>
      ) : (
        <div>Todoはありません</div>
      )}
    </>
  );
});
