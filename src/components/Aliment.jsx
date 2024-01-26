const Aliment = (props) => {
  const { name, imageUrl, text } = props;
  return (
    <section className="aliment">
      <h1 className="aliment__title">{name}</h1>
      <img className="aliment__image" src={imageUrl} alt={name} />
      <p className="aliment__text">{text}</p>
    </section>
  );
};

export default Aliment;
