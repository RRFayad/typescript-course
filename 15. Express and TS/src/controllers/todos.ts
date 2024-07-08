import { RequestHandler } from "express";
import Todo from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Date.now().toString(), text);

  TODOS.push(newTodo);
  return res.status(201).json({ todos: TODOS });
};
