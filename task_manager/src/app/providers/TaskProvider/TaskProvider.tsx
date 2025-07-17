import type { Task } from "../../../shared/model/AboutTask";
import { TaskCategory, TaskStatus, TaskPriority } from "../../../shared/model/AboutTask";
import { TaskContext } from "./model";
import { useState } from "react";
import React from "react";

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
        id: '1',
        title: '...',
        description: '...',
        category: TaskCategory.Bug,
        status: TaskStatus.Todo,
        priority: TaskPriority.High,
    }
  ]);

  const addTask = (task: Omit<Task, 'id'>) => {
    setTasks([...tasks, { ...task, id: Date.now().toString() }]);
  };

  const updateTask = (id: string, changes: Partial<Task>) => {
    setTasks(tasks.map(tasks => tasks.id === id ? { ...tasks, ...changes } : tasks));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => React.useContext(TaskContext);