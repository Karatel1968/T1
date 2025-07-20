import { createContext} from 'react';
import type { Task } from '@/shared/model/AboutTask';

// @ts-ignore
/*export const TaskContext = createContext({
  tasks: [] as Task[],
  addTask: (task: Omit<Task, 'id'>) => {},
  updateTask: (id: string, changes: Partial<Task>) => {},
  deleteTask: (id: string) => {}
});*/

interface TaskContextValue {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, changes: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  addTask: () => {
    console.warn('addTask not implemented');
  },
  updateTask: () => {
    console.warn('updateTask not implemented');
  },
  deleteTask: () => {
    console.warn('deleteTask not implemented');
  }
});