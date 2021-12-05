import { ChangeEvent, memo, VFC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Top: VFC = memo(() => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onClickLoginButton = async () => {
    const url = `${process.env.REACT_APP_API_V1_URL}/user/token/`;
    const json = {
      email,
      password,
    };

    try {
      const response = await axios.post(url, json);
      const token = JSON.parse(response.request.response);
      localStorage.setItem("Authorization", `${token.token}`);
      setErrMsg("");
      navigate("/todo");
    } catch(e) {
      setErrMsg("ログインに失敗しました");
    }
  }

  const onClickClearToken = () => {
    localStorage.clear();
  }

  return (
    <>
      <p>トップ画面です</p>
      <p>ログインフォーム</p>
      <p>{errMsg}</p>
      <div>
        <h6>メールアドレス</h6>
        <input type="email" onChange={onChangeEmail} />
      </div>
      <div>
        <h6>パスワード</h6>
        <input type="password" onChange={onChangePassword} />
      </div>
      <button onClick={onClickLoginButton}>ログイン</button>
      <br />
      <button onClick={() => { console.log(localStorage.getItem("Authorization")) }}>トークン確認</button>
      <button onClick={onClickClearToken}>トークンクリア</button>
    </>
  );
});
