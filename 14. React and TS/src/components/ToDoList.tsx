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

const TodoList: React.FC<TodoListProps> = ({
  items: tasks,
  onDeleteItem: deleteItemHandler,
}) => {
  return (
    <ul className="ml-4 mt-8 flex w-full max-w-[600px] flex-col justify-between">
      {tasks.map((todo) => (
        <li
          key={todo.id}
          className="mt-4 flex h-[72px] w-full items-center justify-between p-4 align-middle font-semibold shadow-md shadow-slate-300 hover:bg-gray-50"
        >
          <span className="flex h-full items-center"> {todo.text} </span>
          <button
            className="h-8 w-24 bg-purple-900 px-2 text-sm text-white hover:bg-purple-950"
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
