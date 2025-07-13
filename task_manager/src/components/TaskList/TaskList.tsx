import { useNavigate } from "react-router-dom";
import { Flex } from 'antd';
import TaskItem from "../TaskItem/TaskItem";
import type { Task } from "../../AboutTask/AboutTask";
import React from 'react';
import { useTasks } from "../../TaskContext";
import { Button, } from 'antd';
import {PlusOutlined} from '@ant-design/icons';


const TaskList: React.FC = () => {

    const [value, setValue] = React.useState<string>('horizontal');
    const navigate = useNavigate();
    const { tasks } = useTasks();

    return(
        <div>
            <Button 
                type="primary" 
                icon={<PlusOutlined />} 
                onClick={() => navigate('/task/new')}
                style={{ marginBottom: 16 }}
            >
                Add Task
            </Button>
            <Flex vertical={value ==='vertical'}>
                {tasks.map(task => (
                    <TaskItem task={task}/>
                ))}
            </Flex>
        </div>
    )
}

export default TaskList;