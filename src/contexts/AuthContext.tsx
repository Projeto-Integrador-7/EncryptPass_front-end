import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { signInRequest } from "../services/auth.service";
import { api } from "../services";

type User = {
    name: String;
    email: String;
}

type SignInData = {
  email: String;
  password: String;
};

type AuthContextType = {
  isAuthenticate: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

  const isAuthenticate = !!user;

  useEffect(() => {
    const {'encryptpass.token': token} = parseCookies()

    if(token){
        let user = localStorage.getItem("encryptpass.user")
        setUser(JSON.parse(user))
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const response = await signInRequest({
      email,
      password,
    })
    setCookie(undefined, "encryptpass.token", response.data.token, {
        maxAge: 60 * 60 * 1, //1h
    })
    localStorage.setItem("encryptpass.user", JSON.stringify(response.data.userWithRefreshToken))

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

    setUser(response.data.userWithRefreshToken)

    Router.push('/Home');
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticate, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
