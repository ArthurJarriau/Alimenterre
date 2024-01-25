import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../components/App';
import { useLocation, Navigate} from "react-router-dom";


const Login = () => {
  const { loginState, handleLogin } = useContext(AuthContext);
  const location = useLocation();
  
  const from = /*location.state?.from ||*/ '/'; 

  if(loginState.user){
    return <Navigate
        to={from}
      />
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
