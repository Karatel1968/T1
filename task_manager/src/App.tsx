import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { TaskProvider } from './TaskContext';
import { router } from './routes';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </ConfigProvider>
  );
};

export default App;
