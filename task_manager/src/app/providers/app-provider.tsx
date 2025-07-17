import React from 'react';
import { ThemeProvider } from './theme-provider';
import { TaskProvider } from './TaskProvider/TaskProvider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TaskProvider>
      <ThemeProvider>
        
            {children}
        
      </ThemeProvider>
    </TaskProvider>
  );
};