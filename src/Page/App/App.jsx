import Post from "./../../Components/post/post";
import "./App.css";
import Todos from "./../../Components/todos/Todos";
import Users from "../../Components/users/users";
import Photos from "../../Components/photos/Photos";
import Comments from "../../Components/Comments/Comments";

const App = () => {
  return (
    <div>
      <div>
        <h1>Post</h1>
        <Post />
      </div>
      <div>
        <h1>Todos</h1>
        <br />
        <br />
        <Todos />
        <br />
        <br />
      </div>
      <div>
        <h1>Users</h1>
        <br />
        <br />
        <Users />
        <br />
        <br />
      </div>
      <div>
        <h1>Photos</h1>
        <br />
        <br />
        <Photos />
        <br />
        <br />
      </div>
      <div>
        <h1>Comments</h1>
        <br />
        <br />
        <Comments />
        <br />
        <br />
      </div>
    </div>
  );
};

export default App;
