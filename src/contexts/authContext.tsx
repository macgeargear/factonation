"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface IAuthContext {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<unknown>;
  logout: () => void;
  id: string;
  name: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const AuthProvider = ({ children }: any): React.ReactNode => {
  // const [token, setToken] = useState("");
  // const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [username, setUsername] = useState(user);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   const storedUser = localStorage.getItem("user");

  //   if (storedUser && storedToken) {
  //     setUser(storedUser);
  //     setToken(storedToken);
  //   }
  // }, []);

  const login = async (username: string, password: string) => {
    const loginInfo = { email: username, password };
    try {
      const res = await fetch(`http://localhost:8000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const data = (await res.json()).data;
      if (data.statusCode === 401) {
        throw new Error(data.message);
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", username);
      localStorage.setItem("name", name);
      setIsLoggedIn(true);
      setUsername(username);
      setName(name);

      setId(data.id);
      console.log(isLoggedIn);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    // setToken("");
    setName("");
    setId("");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout, id, name }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
