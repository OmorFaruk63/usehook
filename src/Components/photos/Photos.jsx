import useHook from "../../hooks/useHook";
import Card from "./Card";
import "./Photos.css";

const Photos = () => {
  const { data } = useHook("https://jsonplaceholder.typicode.com/photos");

  return (
    <div className="container">
      {data.slice(4985).map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Photos;
