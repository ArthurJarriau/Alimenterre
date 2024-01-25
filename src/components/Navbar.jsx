import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/App";

const Navbar = () => {
  const { loginState, handleLogin } = useContext(AuthContext);

  return (
    <>
      <nav>
        <ul>
          <Link to="/">Accueil</Link>
          {loginState.user ? (
            <Link to="/logout">Déconnexion</Link>
          ) : (
            <Link to="/login">Connexion</Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
