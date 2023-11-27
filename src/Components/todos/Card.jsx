/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ item }) => {
  const { title } = item;
  console.log(item);
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
