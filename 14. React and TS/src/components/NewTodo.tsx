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
    textInputRef.current!.value = "";
  };

  return (
    <form
      onSubmit={todoSubmitHandler}
      className="ml-4 mt-4 flex w-full max-w-[600px] flex-col justify-between"
    >
      <div>
        <label htmlFor="todo-text" className="flex flex-col font-bold">
          Todo Text:
        </label>
        <input
          className="w-full border border-purple-900 outline-purple-900"
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
      </div>
      <button className="mt-4 h-8 w-28 bg-purple-900 text-white" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
