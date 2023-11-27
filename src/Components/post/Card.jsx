/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ item }) => {
  const { title, body } = item;
  console.log(item);
  return (
    <div className="card">
      <h2>{title}</h2>
      <h5>{body}</h5>
    </div>
  );
};

export default Card;
