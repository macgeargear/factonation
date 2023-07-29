"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export interface IAuthContext {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<unknown>;
  logout: () => void;
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const _token = Cookies.get("token");
const _name = Cookies.get("name");
const _id = Cookies.get("id");
const _isAuth = Cookies.get("isAuth");
const _email = Cookies.get("email");

export const AuthProvider = ({ children }: any): React.ReactNode => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!_token);
  const [email, setEmail] = useState<string>(_email || "");
  const [name, setName] = useState(_name || "");
  const [id, setId] = useState(_id || "");

  const login = async (username: string, password: string) => {
    const loginInfo = { email: username, password };
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    try {
      const response = await fetch(`http://localhost:8000/user/login`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      setIsLoggedIn(true);
      setEmail(data.email);
      setId(data.id);
      setName(data.name);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    // localStorage.removeItem("token");
    // setToken("");
    setName("");
    setEmail("");
    setIsLoggedIn(false);
    setId("");
    // localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("name");
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, email, login, logout, id, name }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
