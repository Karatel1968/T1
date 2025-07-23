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
  description?: string;
  category: 'Bug' | 'Feature' | 'Documentation';
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
}