import { Request, Response } from 'express';
import { Task } from '../models/Task';

let tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const task: Task = {
    ...req.body,
    id: Date.now().toString(),
  };
  tasks.push(task);
  res.status(201).json(task);
};

export const getTaskById = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
    const taskId = req.params.id;
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  const updatedTask: Task = {
    ...tasks[taskIndex],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
}

export const deleteTask = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  tasks = tasks.filter(t => t.id !== taskId);
  res.status(204).send();
};