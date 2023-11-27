import useHook from "../../hooks/useHook";
import Card from "./Card";
import "./Post.css";

const Post = () => {
  const { data } = useHook("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="container">
      {data.slice(85).map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Post;
