import React, { createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Profile from "../pages/Profile";
import Recommandations from "../pages/Recommandations";
import Register from "../pages/Register";
import Score from "../pages/Score";
import Layout from "./Layout";
import Tracker from "../pages/Tracker";

export const AuthContext = createContext();

const loginReducer = (state, action) => {
  switch (action.type) {
    case "login_start":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "login_success":
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    case "logout_success":
      return {
        ...state,
        loading: false,
        error: false,
        user: null,
      };

    case "login_error":
      return {
        ...state,
        loading: false,
        error: true,
        user: null,
      };
    default:
      return state;
  }
};

const App = () => {
  const initialState = {
    loading: false,
    error: false,
    user: null,
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  const handleLogin = (credentials) => {
    dispatch({ type: "login_start" });

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "success") {
          dispatch({ type: "login_success", payload: data.user });
        } else {
          dispatch({ type: "login_error" });
        }
      });
  };

  const handleLogout = () => {
    //console.log('logout')

    fetch("/api/auth/logout", {
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        dispatch({ type: "logout_success" });
        //console.log(response.ok)
      } else {
        dispatch({ type: "login_error" });
      }
    });
  };

  const checkAuth = () => {
    fetch("/api/auth/me", {
      method: "GET",
      credentials: "same-origin",
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "login_success", payload: data });
      })
      .catch((error) => {
        console.error("Error during fetch operation:", error);
        dispatch({ type: "login_error" });
      });
  };

  const handleRegister = (credentials) => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...credentials,
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("register");
        console.log(data);
        return handleLogin(credentials);
      });
  };

  useEffect(() => {
    checkAuth();
    //console.log(loginState)
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ loginState, handleLogin, handleLogout, handleRegister }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/healthy" element={<Recommandations />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/score" element={<Score />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </Layout>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
