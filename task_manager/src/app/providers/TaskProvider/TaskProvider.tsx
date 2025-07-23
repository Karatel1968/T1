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
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask
} from '@shared/api/TaskApi'


export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
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
  }, []);

  const addTask = async (task: Omit<Task, 'id'>) => {
    try {
      const newTask = await apiCreateTask(task);
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add task');
      throw err;
    }
  };

  const updateTask = async (id: string, changes: Partial<Task>) => {
    try {
      const updatedTask = await apiUpdateTask(id, changes);
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
      throw err;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await apiDeleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
      throw err;
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => React.useContext(TaskContext);