import React, { createContext, useEffect } from "react";

export const authContext = createContext<context>({
  authenticated: false,
});

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
  props: any
) => {
  function authenticateFunction() {
    const data = localStorage.getItem("key");
    let deets = { email: "", password: "" };
    if (data) {
      deets = JSON.parse(data);
    }
    if (
      deets.email === "superadmin@medixab.net" &&
      deets.password === "password"
    ) {
      return true;
    }
    return false;
  }

  const authContextValue: context = {
    authenticated: authenticateFunction(),
  };

  useEffect(() => {
    console.log(`I rerendered`);
  }, []);
  return (
    <authContext.Provider value={authContextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
