/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ item }) => {
  const { title, thumbnailUrl } = item;
  console.log(item);
  return (
    <div className="card">
      <h2>Title:{title}</h2>
      <img src={thumbnailUrl} alt="" />
    </div>
  );
};

export default Card;
