const About = (props) => {
  const { name, origin, score } = props;
  return (
    <section className="about">
      <h2 className="about__title">À propos de la {name}</h2>
      <div className="about__origin">
        <h3 className="about__subtitle">Origine</h3>
        <p className="about__text">{origin}</p>
      </div>
      <div className="about__nutriscore">
        <p className="about__score">{score}</p>
        <h3 className="about__subtitle">Nutriscore</h3>
      </div>
      <div className="about__nutriment">
        <h3 className="about__subtitlenutri">Nutriments</h3>
        <div className="about__line">
          <p className="about__category">Énergie</p>
          <p className="about__data">170kj / 40kcal</p>
        </div>
        <div className="about__line">
          <p className="about__category">Glucides</p>
          <p className="about__data">9,8g</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine A</p>
          <p className="about__data">120µg (15%)</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine C</p>
          <p className="about__data">12mg (15%)</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine E</p>
          <p className="about__data">1,8mg (15%)</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine B6</p>
          <p className="about__data">0,21mg (15%)</p>
        </div>
        <div className="about__line">
          <p className="about__category">Acide Fiolique</p>
          <p className="about__data">30,0µg (15%)</p>
        </div>
      </div>
    </section>
  );
};
export default About;
