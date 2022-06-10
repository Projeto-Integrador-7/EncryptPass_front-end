import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { signInRequest } from "../services/auth.service";
import { api } from "../services";

type User = {
  createdAt: String;
  email: String;
  expirePassword: String;
  name: String;
  passwordReminder: Boolean;
  passwordReminderTip: String;
  phoneNumber: String;
  updatedAt: String;
  _id: String;
};

type SignInData = {
  email: String;
  password: String;
};

type AuthContextType = {
  isAuthenticate: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticate = !!user;

  useEffect(() => {
    async function loadStoregedData() {
      const { "encryptpass.token": token } = parseCookies();
      const user = localStorage.getItem("encryptpass.user");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (token && user) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        setUser(JSON.parse(user));
        setLoading(false)
      }
    }
    loadStoregedData();
  }, []);

  async function signIn({ email, password }: SignInData) {
    const response = await signInRequest({
      email,
      password,
    });
    setCookie(undefined, "encryptpass.token", response.data.token, {
      maxAge: 60 * 60 * 1, //1h
    });
    localStorage.setItem(
      "encryptpass.user",
      JSON.stringify(response.data.userWithRefreshToken)
    );

    api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

    setUser(response.data.userWithRefreshToken);

    Router.push("/MeuCofre");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticate, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
