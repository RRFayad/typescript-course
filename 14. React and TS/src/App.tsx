import TodoList from "./components/ToDoList";

const App = () => {
  let todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div>
      {/* A component that adds todos */}
      <TodoList items={todos} />
    </div>
  );
};

export default App;
