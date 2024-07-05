import { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo: addTodoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value; //remember TS does not know it will not be null when ran, that's why the !

    addTodoHandler(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler} className="flex w-96 justify-between">
      <div>
        <label htmlFor="todo-text">Todo:</label>
        <input className="w-52 bg-gray-100 border rounded-lg ml-4" type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button className="bg-blue-400 w-20 h-6 rounded-lg" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
