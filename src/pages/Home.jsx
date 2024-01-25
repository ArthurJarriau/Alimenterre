import React, { useContext } from 'react';
import { AuthContext } from '../components/App';
const Home = () => {
    const { loginState, handleLogin } = useContext(AuthContext);

    console.log('home')
    return <main>
        <h1>home</h1>
    </main>
}

export default Home