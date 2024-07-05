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
  onDeleteItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items: tasks, onDeleteItem: deleteItemHandler }) => {
  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id} className="mt-2 w-40 flex justify-around">
          <span> {todo.text} </span>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
            onClick={() => deleteItemHandler(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
