import "./Card.css";

export const Card = ({ value }: any) => {
  return (
    <div className="card-box">
      <div className="image-box">
        <img src={value.strSportThumb} alt="img" />
      </div>
      <div className="card-name">{value.strSport}</div>
      <div className="card-info">
        <div>
          <p>{value.strFormat}</p>
        </div>
      </div>
    </div>
  );
};
