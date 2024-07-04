/*
// MY ORIGINAL APPROACH

interface Todo {
  id: string;
  text: string;
}

const TodoList = ({ items }: { items: Todo[] }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
*/

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
}

const TodoList: React.FC<TodoListProps> = ({ items: tasks }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
