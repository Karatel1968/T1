import type { Task } from '../model/AboutTask'; 

const API_URL = 'http://localhost:3001/api/tasks'; 

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
};

export const updateTask = async (id: string, changes: Partial<Task>): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};
