/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ item }) => {
  const { name, username, email, phone } = item;
  console.log(item);
  return (
    <div className="card">
      <h1>Name: {name}</h1>
      <h3>Username: {username}</h3>
      <h5>Email: {email}</h5>
      <h5>Phone: {phone}</h5>
    </div>
  );
};

export default Card;
