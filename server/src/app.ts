import express from 'express';
import cors from 'cors';
import { taskRouter } from './Routes/TaskRoutes';

export const app = express();
app.use(express.json());
app.use(cors()); 
app.use('/api/tasks', taskRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});