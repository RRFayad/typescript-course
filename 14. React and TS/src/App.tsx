import { useState } from "react";

import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [...prevState, { id: Date.now().toString(), text: text }]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteItem={deleteTodoHandler} />
    </div>
  );
};

export default App;
