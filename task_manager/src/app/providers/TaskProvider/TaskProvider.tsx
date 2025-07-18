import type { Task } from "../../../shared/model/AboutTask";
import { TaskCategory, TaskStatus, TaskPriority } from "../../../shared/model/AboutTask";
import { TaskContext } from "./model";
import { useState } from "react";
import React from "react";
import { loadFromLocalStorage } from "../../../shared/api/storage/storage";
import { useEffect } from "react";
import { saveToLocalStorage } from "../../../shared/api/storage/storage";

const TASKS_STORAGE_KEY = 'task_manager_tasks';

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [tasks, setTasks] = useState<Task[]>(() => {

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
  });

  useEffect(() => {
    saveToLocalStorage(TASKS_STORAGE_KEY, tasks);
  }, [tasks]);

  const addTask = (task: Omit<Task, 'id'>) => {
    setTasks(prev => [...prev, { ...task, id: Date.now().toString() }]);
  };

  const updateTask = (id: string, changes: Partial<Task>) => {
    setTasks(prev => prev.map(tasks => tasks.id === id ? { ...tasks, ...changes } : tasks));
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