import { RequestHandler } from "express";
import Todo from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Date.now().toString(), text);

  TODOS.push(newTodo);
  return res.status(201).json({ todos: TODOS });
};

export const getTodos: RequestHandler = (req, res, next) => {
  return res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const newTodoId = req.params.id;
  const newTodoData = req.body as { text: string };

  const todoIndex = TODOS.findIndex((item: Todo) => item.id === newTodoId);

  TODOS[todoIndex] = { text: newTodoData.text, id: newTodoId };

  return res.status(204).json({ todos: TODOS });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  const toBeDeletedIndex = TODOS.findIndex((item: Todo) => item.id === id);

  TODOS.splice(toBeDeletedIndex, 1);

  return res.status(200).json({ todos: TODOS });
};
