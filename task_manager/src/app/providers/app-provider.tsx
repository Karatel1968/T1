import React from 'react';
import { ThemeProvider } from './theme-provider';
import { TaskProvider } from '../../TaskContext';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TaskProvider>
      <ThemeProvider>
        
            {children}
        
      </ThemeProvider>
    </TaskProvider>
  );
};