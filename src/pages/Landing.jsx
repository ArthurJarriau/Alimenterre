import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../components/App";

const Landing = () => {
  const { loginState, handleLogin } = useContext(AuthContext);
  if (loginState.user) {
    return <Navigate to="/home" />;
  }

  return (
    <main className="landing">
      <div className="landing__nav">
        <img src="/img/logo.png" alt="" className="landing__logo" />
        <div className="landing__buttons">
          <Link to="/register" className="landing__link">
            Inscription
          </Link>
          <Link to="/login" className="landing__link">
            Connexion
          </Link>
        </div>
      </div>
      <h1 className="landing__title">L'application AlimenTerre</h1>
      <p className="landing__subtitle">
        Réduisons notre <span>empreinte</span>,
        <p className="landing__return">
          savourons <span>l'avenir</span>.
        </p>
      </p>
      <img src="/img/image1.png" alt="" className="landing__imagefirst" />
      <div className="landing__part">
        <h2 className="landing__titleBis">Le Concept</h2>
        <p className="landing__paragraph">
          Gagnez des points en suivant votre alimentation hebdomadaire en
          découvrant votre impact environnemental. Suivez les recommandations
          afin de devenir le maitre l’alimentation responsable
        </p>
        <img src="/img/image2.png" alt="" className="landing__imgBis" />
      </div>
      <div className="landing__partTer">
        <h2 className="landing__titleTer">Sensibiliser nos utilisateurs</h2>
        <img src="/img/image3.png" alt="" className="landing__imgTer" />
        <p className="landing__paragraphTer">
          L’application AlimenTerre à pour principale mission de sensibiliser
          les personnes sur leur <span>impact environnemental</span>.
        </p>
      </div>
    </main>
  );
};

export default Landing;
