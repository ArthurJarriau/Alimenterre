import React, { useContext } from "react";
import { AuthContext } from "../components/App";
import LeaderBoardCard from "../components/LeaderBoardCard";
import ScoreTracker from "../components/ScoreTracker";
import ScoreCard from '../components/ScoreCard';
import { Navigate } from "react-router-dom";
const Home = () => {
  const { loginState } = useContext(AuthContext);
    if (loginState.user === null) {
        return (
          <Navigate
            to="/login"
          />
        );
    }
  return (
    <section className="home" >
        <h1>HOME</h1>
    </section>
  );
};

export default Home;