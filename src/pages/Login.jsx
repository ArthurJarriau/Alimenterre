import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/App";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { loginState, handleLogin } = useContext(AuthContext);
  const location = useLocation();

  const from = /*location.state?.from ||*/ "/";

  if (loginState.user) {
    return <Navigate to={from} />;
  }

  return (
    <div>
      <div>
        <div>
          {loginState.error}
          {!loginState.error && loginState.user}

          <LoginForm onSubmit={handleLogin} disabled={loginState.loading} />
        </div>
      </div>
    </div>
  );
};

export default Login;
