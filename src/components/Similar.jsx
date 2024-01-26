const Similar = () => {
  return (
    <section className="similar">
      <h2 className="similar__title">Produits similaires</h2>
      <div className="similar__pastille">
        <img src="/img/pomme.png" alt="Pomme" className="similar__img" />
        <p className="similar__name">Pomme</p>
      </div>
      <div className="similar__pastille">
        <img src="/img/saumon.png" alt="Saumon" className="similar__img" />
        <p className="similar__name">Saumon</p>
      </div>
      <div className="similar__pastille">
        <img src="/img/salade.png" alt="Salade" className="similar__img" />
        <p className="similar__name">Salade</p>
      </div>
    </section>
  );
};

export default Similar;
