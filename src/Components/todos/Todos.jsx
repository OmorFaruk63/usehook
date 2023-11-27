import useHook from "../../hooks/useHook";
import Card from "./Card";
import "./Todos.css";

const Todos = () => {
  const { data } = useHook("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="container">
      {data.slice(170).map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Todos;
