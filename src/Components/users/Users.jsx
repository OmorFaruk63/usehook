import useHook from "../../hooks/useHook";
import Card from "./Card";
import "./Users.css";

const Users = () => {
  const { data } = useHook("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="container">
      {data.slice(1).map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Users;
