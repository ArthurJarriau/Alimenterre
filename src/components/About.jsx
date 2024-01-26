const About = (props) => {
  const {
    name,
    origin,
    score,
    energy,
    glucide,
    vitaminea,
    vitaminec,
    vitaminee,
    vitamineb6,
    acide,
  } = props;
  return (
    <section className="about">
      <h2 className="about__title">À propos de : {name}</h2>
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
          <p className="about__data">{energy}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Glucides</p>
          <p className="about__data">{glucide}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine A</p>
          <p className="about__data">{vitaminea}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine C</p>
          <p className="about__data">{vitaminec}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine E</p>
          <p className="about__data">{vitaminee}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Vitamine B6</p>
          <p className="about__data">{vitamineb6}</p>
        </div>
        <div className="about__line">
          <p className="about__category">Acide Fiolique</p>
          <p className="about__data">{acide}</p>
        </div>
      </div>
    </section>
  );
};
export default About;
