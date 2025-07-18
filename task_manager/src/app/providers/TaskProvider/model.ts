import React, { createContext} from 'react';
import type { Task } from '@/shared/model/AboutTask';

export const TaskContext = createContext({
  tasks: [] as Task[],
  addTask: (task: Omit<Task, 'id'>) => {},
  updateTask: (id: string, changes: Partial<Task>) => {},
  deleteTask: (id: string) => {}
});