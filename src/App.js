import "./App.css";
import Todo from "./components/TodoList";
import User from "./components/UserList";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, err } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <div className="App">
        <section>
          <Todo />
        </section>
        <section>
          <User />
        </section>
      </div>
      <div className="posts">
        <h1>Posts</h1>
        {loading && <h1>Loading....</h1>}
        {data &&
          data.slice(0, 10).map((x) => {
            return <div>{x.title}</div>;
          })}
      </div>
    </>
  );
}

export default App;
