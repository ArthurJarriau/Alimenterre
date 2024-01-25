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
    <main>
      <ScoreCard />
      <ScoreTracker />
      <h1>home</h1>
      <LeaderBoardCard
        position="1st"
        name="Jean-Marie DURAND"
        points="206710"
        bgColor="#F47D75"
      />
      <LeaderBoardCard
        position="2nd"
        name="KeepSand"
        points="206450"
        bgColor="#BDDCFC"
      />
      <LeaderBoardCard
        position="3rd"
        name="OkayOkay33000"
        points="206400"
        bgColor="#D2F475"
      />
      <LeaderBoardCard
        position="49837th"
        name="Philippe KAMO"
        points="2710"
        bgColor="#F47D75"
      />
    </main>
  );
};

export default Home;