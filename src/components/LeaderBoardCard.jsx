const LeaderBoardCard = (props, credentials) => {
  const { position, name, bgColor, points } = props;

  return (
    <div className="leadCard" style={{ backgroundColor: bgColor }}>
      <p className="leadCard__position">{position}</p>
      <p className="leadCard__number">{name}</p>
      <p className="leadCard__points">{points}pts</p>
    </div>
  );
};
export default LeaderBoardCard;
