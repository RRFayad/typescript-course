import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  // let todos = [{ id: "t1", text: "Finish the course" }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
