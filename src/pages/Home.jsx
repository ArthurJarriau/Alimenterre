import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/App";
import LeaderBoardCard from "../components/LeaderBoardCard";
import ScoreCard from "../components/ScoreCard";
import ScoreTracker from "../components/ScoreTracker";
const Home = () => {
  const { loginState } = useContext(AuthContext);
  if (loginState.user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="home" >
      <ScoreTracker score={loginState.user.points_gen} size={"homepage"} />
      <div className="home__score">Score</div>
    </section>
  );
};

export default Home;
