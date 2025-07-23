export interface Task {
  id: string;
  title: string;
  description?: string;
  category: 'Bug' | 'Feature' | 'Documentation';
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
}