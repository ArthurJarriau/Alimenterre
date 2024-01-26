import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/App";
import CardHisto from "../components/CardHisto";
import LeaderBoardCard from "../components/LeaderBoardCard";
import ScoreCard from "../components/ScoreCard";
import ScoreTracker from "../components/ScoreTracker";
const Score = () => {
  const { loginState, handleLogout } = useContext(AuthContext);
  const [users,setUsers]= useState()
  const getUsers = () => {
    fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const sortedUsers = data.sort((a, b) => b.points_gen - a.points_gen);
        setUsers(sortedUsers);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  if (loginState.user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="score">
      <div className="score-global">
        <ScoreTracker score={loginState.user.points_gen} size={"large"} />
        <h2 className="score-global__title">Score</h2>
      </div>
      <div className="card-list">
        <h2 className="card-list__title">Leaderboard</h2>
      
      <LeaderBoardCard
        position="1st"
        name={users && users[0].username}
        points={users && users[0].points_gen}
        bgColor="#F47D75"
      />
      <LeaderBoardCard
        position="2nd"
        name={users && users[1].username}
        points={users && users[1].points_gen}
        bgColor="#BDDCFC"
      />
      <LeaderBoardCard
        position="3rd"
        name={users && users[2].username}
        points={users && users[2].points_gen}
        bgColor="#D2F475"
      />

      {users && (loginState.user.points_gen<users[2].points_gen  &&
      <LeaderBoardCard
        position={(users.findIndex(user => user.email === loginState.user.email))}
        name={loginState.user.username}
        points={loginState.user.points_gen}
        bgColor="#F47D75"
      />)}
      </div>
    </section>
  );
};

export default Score;
