import React, { useContext } from 'react';
import { AuthContext } from '../components/App';
import ScoreTracker from '../components/ScoreTracker';
const Home = () => {
    const { loginState, handleLogin } = useContext(AuthContext);

    console.log('home')
    return <main>
        <ScoreTracker />
        <h1>home</h1>
    </main>
}

export default Home