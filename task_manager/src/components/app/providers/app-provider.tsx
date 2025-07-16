import React from 'react';
//import { RouterProvider } from './router-provider';
import { ThemeProvider } from './theme-provider';
import { TaskProvider } from '../../../TaskContext';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TaskProvider>
      <ThemeProvider>
        
            {children}
        
      </ThemeProvider>
    </TaskProvider>
  );
};