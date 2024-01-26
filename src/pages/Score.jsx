import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/App";
import CardHisto from "../components/CardHisto";
import LeaderBoardCard from "../components/LeaderBoardCard";
import ScoreCard from "../components/ScoreCard";
import ScoreTracker from "../components/ScoreTracker";
const Home = () => {
  const { loginState } = useContext(AuthContext);
  if (loginState.user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="score">
      <div className="score-global">
        <ScoreTracker score={75} size={"large"} />
        <h2 className="score-global__title">Score</h2>
      </div>
      <div className="card-list">
        <h2 className="card-list__title">Détails des scores</h2>
        <ScoreCard
          score={75}
          title={"Score de transport"}
          svg={"truck"}
          color={"#F47D75"}
        />
        <ScoreCard
          score={50}
          title={"Eco score"}
          svg={"ecoscore"}
          color={"#BDDCFC"}
        />
        <ScoreCard
          score={25}
          title={"Epi score"}
          svg={"episcore"}
          color={"#D2F475"}
        />
        <ScoreCard
          score={15}
          title={"Nutriscore"}
          svg={"nutriscore"}
          color={"#F47D75"}
        />
      </div>
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
      <CardHisto imageUrl="/img/banane.png" name="Banane" points="100" />
    </section>
  );
};

export default Home;
