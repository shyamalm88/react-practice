import React from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  const renderTodos = data.map((x) => {
    return <div key={x.id}>{x.title}</div>;
  });

  return <div>{renderTodos}</div>;
};
const Todo = HOC(TodoList, "todo", "TodoList");
export default Todo;
