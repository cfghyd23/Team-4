import React, { useState } from "react";

const AuthContext = React.createContext({
  user: {
    phoneNumber: "",
    userID: "",
    token: "",
  },
  isLoggedIn: false,
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialUser = localStorage.getItem("user");

  const [user, setUser] = useState(
    !!initialUser ? JSON.parse(initialUser) : null
  );

  const userIsLoggedIn = !!user;
  const loginHandler = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue = {
    user: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
