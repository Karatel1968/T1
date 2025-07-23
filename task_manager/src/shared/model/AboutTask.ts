/**
 * Категории задач для классификации
 * @enum {string}
 */

export enum TaskCategory {
  Bug = 'Bug',
  Feature = 'Feature',
  Documentation = 'Documentation',
  Refactor = 'Refactor',
  Test = 'Test',
}

/**
 * Статусы задачи для системы управления задачами
 * @enum {string}
 */
export enum TaskStatus {
  Todo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

/**
 * Приоритеты выполнения задачи
 * @enum {string}
 */
export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}


/**
 * Основной интерфейс задачи
 * @interface
 * @property {string} id - Автогенерируемый UUID (не редактируется клиентом)
 * @property {string} title - Обязательное поле (валидация: 3-100 символов)
 * @property {string} description - Опциональное поле
 * @property {TaskStatus} status - Значение по умолчанию: 'todo'
 * @property {TaskPriority} priority - Влияет на сортировку в API
 * @property {TaskCategory} category - Используется для фильтрации
 * @property {string} createdAt - ISO-дата (автозаполнение)
 * @property {string} updatedAt - ISO-дата (автообновление при изменениях)
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
}