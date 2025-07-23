# Task Manager Server

Серверная часть приложения для управления задачами, предоставляющая REST API для клиентских приложений.

## 📌 Реализованный функционал

- **CRUD операции для задач**:
  - `GET /tasks` - получение списка всех задач
  - `GET /tasks/:id` - получение задачи по ID
  - `POST /tasks` - создание новой задачи
  - `PUT /tasks/:id` - обновление существующей задачи
  - `DELETE /tasks/:id` - удаление задачи

- **Системные характеристики**:
  - Валидация входящих данных
  - Обработка ошибок с понятными статус-кодами
  - Логирование запросов
  - Поддержка CORS

## 🚀 Инструкция по запуску

### Предварительные требования
- Node.js v16+
- npm или yarn
- (Опционально) Docker для запуска в контейнере

### Установка и запуск

1. Клонировать репозиторий:
```bash
git clone https://github.com/your-repo/task-manager-server.git
cd task-manager-server
```

2. Установить зависимости:
```bash
npm install
# или
yarn install
```

3. Запустить сервер в development режиме:
```bash
npm run dev
# или
yarn dev
```
Сервер будет доступен по адресу: http://localhost:3001

4. Production сборка
```bash
npm run build
npm start
```

Запуск в Docker
```bash
docker build -t task-manager-server .
docker run -p 3000:3000 task-manager-server
```

## 🛠 Используемые технологии
Основной стек:

Node.js

Express.js

TypeScript

Дополнительные инструменты:

ESLint + Prettier - линтинг и форматирование кода

Nodemon - автоматическая перезагрузка сервера при разработке

CORS - middleware для кросс-доменных запросов

Подходы:

REST API архитектура

Модульная структура проекта

Чистый код и SOLID принципы

Middleware-подход для обработки запросов


## 🏗 Архитектура проекта
src/
├── Controllers/    # Обработчики запросов
├── Routes/         # Маршруты API
├── models/         # Типы и интерфейсы данных
├── app.ts          # Инициализация приложения
└── server.ts       # Запуск сервера
