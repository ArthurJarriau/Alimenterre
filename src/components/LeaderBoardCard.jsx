const LeaderBoardCard = (props) => {
  const { position, name, points, bgColor } = props;
  return (
    <div className="leadCard" style={{ backgroundColor: bgColor }}>
      <p className="leadCard__position">{position}</p>
      <p className="leadCard__number">{name}</p>
      <p className="leadCard__points">{points}pts</p>
    </div>
  );
};
export default LeaderBoardCard;
