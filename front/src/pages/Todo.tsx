import { memo, VFC, useEffect, useState } from "react";
import axios from "axios";

export const Todo: VFC = memo(() => {
  const [todos, setTodos] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const headers = {
    'Authorization': `token ${localStorage.getItem("Authorization")}`
  };

  const getTodos = async (callUrl: string | null = null) => {
    const url = callUrl ? callUrl : `${process.env.REACT_APP_API_V1_URL}/todo/`
    try {
      const response = await axios.get(url, { headers });
      if(response.data.results) {
        setTodos(response.data.results);
        setErrMsg("");
      }
      if(response.data.next) {
        setNextUrl(response.data.next);
      } else {
        setNextUrl("");
      }
      if(response.data.previous) {
        setPrevUrl(response.data.previous);
      } else {
        setPrevUrl("")
      }
    } catch (e) {
      setErrMsg("データ取得に失敗しました");
    }
  }

  const clickNextButton =() => {
    if(nextUrl) {
      getTodos(nextUrl);
      // console.log(nextUrl);
    // } else {
    //   console.log("not Exists url");
    }
  }

  const clickPrevButton =() => {
    if(prevUrl) {
      getTodos(prevUrl);
      // console.log(prevUrl);
    // } else {
    //   console.log("not Exists url");
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <p>Todo画面です</p>
      { todos ? (
        <>
          <ul>
            {todos.map((data) => (
              <li key={data["id"]}>
                title: { "title" in data ? data["title"] : ""}
                &nbsp;
                content: { "content" in data ? data["content"] : ""}
              </li>
            ))}
          </ul>
          <button onClick={clickPrevButton}>前へ</button>
          <button onClick={clickNextButton}>次へ</button>
        </>
      ) : (
        <div>Todoはありません</div>
      )}
      <div>{errMsg}</div>
    </>
  );
});
