"use client";

import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { useState } from "react";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  const setIsLoginFuntion = (): void => {
    setIsLogin(true);
  };

  if (!isLogin)
    return <Login isLogin={isLogin} setIsLoginFuntion={setIsLoginFuntion} />;

  return <Home isLogin={isLogin} setIsLoginFuntion={setIsLoginFuntion} />;
}
