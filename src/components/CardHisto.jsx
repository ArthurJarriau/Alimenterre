const CardHisto = (props) => {
  const { imageUrl, name, points } = props;

  return (
    <div className="cardhst">
      <img src={imageUrl} alt={name} className="cardhst__img" />
      <p className="cardhst__name">{name}</p>
      <p className="cardhst__points">{points}pts</p>
    </div>
  );
};
export default CardHisto;
