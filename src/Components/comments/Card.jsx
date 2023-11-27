/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ item }) => {
  const { name, email, body } = item;
  console.log(item);
  return (
    <div className="card">
      <h2>Name:{name}</h2>
      <h5>Email:{email}</h5>
      <h5>{body}</h5>
    </div>
  );
};

export default Card;
