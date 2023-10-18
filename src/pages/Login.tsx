"use client";

import { useEffect, useState } from "react";
import Home from "./Home";
import secrets from "../secrets.json";

interface ILogin {
  isLogin: boolean;
  setIsLoginFuntion: any;
}

const Login = ({ isLogin, setIsLoginFuntion }: ILogin) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

    const chekingIsLogin = () => {
      if (isLogin)
        return <Home isLogin={isLogin} setIsLoginFuntion={setIsLoginFuntion} />;
    };
    chekingIsLogin();
  }, [isLogin]);

  const login = () => {
    
    if (!(password || username)) return;

    if (!(password === secrets.password || username === secrets.username))
      return;
    setIsLoginFuntion();
  };

  return (
    <div className="p-5 mt-5 rounded bg-orange-400">
      <h1 className="text-xl font-bold mb-2">Login Page</h1>
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 py-1 text-black rounded border-none"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="px-2 py-1 text-black rounded border-none"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button
          onClick={login}
          className="px-2 py-1 bg-blue-700 text-white font-bold rounded border-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
