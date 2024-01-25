import React, { useContext } from "react";
import { AuthContext } from "./App";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { loginState, handleLogout } = useContext(AuthContext);

  return (
    <div className="">
      <main>{props.children}</main>
      {loginState.user !== null && <Navbar />}
    </div>
  );
};

export default Layout;
