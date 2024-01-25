import React, { useContext } from 'react';
import { AuthContext } from '../components/App';
import { Navigate } from 'react-router-dom';
import ScoreCard from '../components/ScoreCard';
const Home = () => {
    const { loginState, handleLogin } = useContext(AuthContext);
    if (loginState.user === null) {
        return (
          <Navigate
            to="/login"
          />
        );
      }
    console.log('home')
    return <main>
        <ScoreCard />
        <h1>home</h1>
    </main>
}

export default Home