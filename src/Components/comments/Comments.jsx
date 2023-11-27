import useHook from "../../hooks/useHook";
import Card from "./Card";
import "./comments.css";

const Comments = () => {
  const { data } = useHook("https://jsonplaceholder.typicode.com/comments");

  return (
    <div className="container">
      {data.slice(485).map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Comments;
