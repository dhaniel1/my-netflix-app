import React, { createContext } from "react";

export const authContext = createContext<context>({
  authenticated: true,
});

const authContextValue = {
  authenticated: false,
};

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
  props: any
) => {
  return (
    <authContext.Provider value={authContextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
