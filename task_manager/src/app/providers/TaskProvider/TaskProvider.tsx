import type { Task } from '@/shared/model/AboutTask';
import { TaskCategory, TaskStatus, TaskPriority } from "@shared/model/AboutTask";
import { TaskContext } from "./model";
import { useState } from "react";
import React from "react";
import { loadFromLocalStorage } from '../../../shared/api/storage/storage';
import { useEffect } from "react";
import { saveToLocalStorage } from "../../../shared/api/storage/storage";
import { 
  fetchTasks, 
  createTask as apiCreateTask,
  updateTask as apiUpdateTask
} from '@shared/api/TaskApi'

const TASKS_STORAGE_KEY = 'task_manager_tasks';

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([])/*() => {

    return loadFromLocalStorage<Task[]>(TASKS_STORAGE_KEY) || [
      {
        id: '1',
        title: 'Пример задачи',
        description: 'описание',
        status: TaskStatus.Todo,
        priority: TaskPriority.Medium,
        category: TaskCategory.Feature,
      }
    ];
  });*/

  useEffect(() => {
    //saveToLocalStorage(TASKS_STORAGE_KEY, tasks);
    const loadTasks = async () => {
      try {
          const loadedTasks = await fetchTasks();
          setTasks(loadedTasks);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
        }
      };

    loadTasks();
  }, [/*tasks*/]);

  const addTask = async (task: Omit<Task, 'id'>) => {
    //setTasks(prev => [...prev, { ...task, id: Date.now().toString() }]);
    try {
      const newTask = await apiCreateTask(task);
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add task');
      throw err;
    }
  };

  const updateTask = async (id: string, changes: Partial<Task>) => {
    //setTasks(prev => prev.map(tasks => tasks.id === id ? { ...tasks, ...changes } : tasks));
    try {
      const updatedTask = await apiUpdateTask(id, changes);
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
      throw err;
    }
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => React.useContext(TaskContext);