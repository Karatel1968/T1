import { createBrowserRouter } from 'react-router-dom';
import Home from '../../../Pages/Home';
import TaskPage from '../../../Pages/TaskPage';

export const router = createBrowserRouter([
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'task/:id',
        element: <TaskPage />,
      },
]);