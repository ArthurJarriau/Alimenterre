import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur AlimenTerre</h1>
        <p>Notre projet vise à vous aider à faire des choix alimentaires plus sains et plus respectueux de l'environnement.</p>
        <p>Vous pouvez rechercher des produits par nom ou par code barre.</p>
      </header>
      <section>
        <h2>PAUL</h2>
        <p>L'EcoScore est un indicateur environnemental qui vous aide à comprendre l'impact de vos choix alimentaires sur l'environnement. Il prend en compte des facteurs tels que les émissions de gaz à effet de serre, l'utilisation des terres et l'épuisement des ressources naturelles.</p>
        
      </section>
      <section>
        <h2>NutriScore</h2>
        <p>Le NutriScore est un système de notation nutritionnelle qui vous aide à comprendre la qualité nutritionnelle des aliments. Il est basé sur une échelle de couleurs et de lettres allant de A (meilleur choix) à E (moins bon choix).</p>
      </section>
    </div>
  );
}

export default App;