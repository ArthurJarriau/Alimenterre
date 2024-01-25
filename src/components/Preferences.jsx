const Preferences = () => {
  return (
    <section className="preferency">
      <h2 className="preferency__title">Préférences:</h2>
      <div className="preferency__container">
        <p className="preferency__category">Genre</p>
        <select>
          <option value="femme">Femme</option>
          <option value="homme">Homme</option>
          <option value="mediaquery">Media-query</option>
          <option value="autres">Autres</option>
        </select>
      </div>
      <div className="preferency__container">
        <p className="preferency__category">Régime alimentaire</p>
        <select>
          <option value="vegetarien">Vegetarien</option>
          <option value="vegan">Vegan</option>
          <option value="halal">Halal</option>
          <option value="kacher">Kacher</option>
          <option value="noGluten">Sans gluten</option>
        </select>
      </div>
    </section>
  );
};
export default Preferences;
