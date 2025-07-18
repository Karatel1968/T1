import type { Task } from '@/shared/model/AboutTask';
import { Avatar, Card } from 'antd';
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '@/app/providers/TaskProvider/TaskProvider';
import { useState } from "react";
import {Modal} from "antd";
import {Tag} from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const TaskItem: React.FC<{task: Task}> = ({task}) => {
    const { deleteTask } = useTasks();
    const navigate = useNavigate();

    const { Meta } = Card;

    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const getPriorityColor = () => {
    switch (task.priority) {
      case 'High': return 'red';
      case 'Medium': return 'orange';
      case 'Low': return 'green';
      default: return 'blue';
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'Done': return 'success';
      case 'In Progress': return 'processing';
      default: return 'warning';
    }
  };

  const getStatusIcon = () => {
    switch (task.status) {
      case 'Done': return <CheckCircleOutlined />;
      case 'In Progress': return <SyncOutlined spin />;
      default: return <ExclamationCircleOutlined />;
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTask(task.id);
    handleOk();
  };
  

    return(
      <>
      <Modal
        title="Подтверждение удаления"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <p>Вы действительно хотите удалить задачу ?</p>
      </Modal>
        <Card style={{ width: 320 }}
            title={task.title}
            extra={[
                <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => navigate(`/task/${task.id}`)}
                />,
                <Button
                  key="delete"
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={showModal}
                />,
            ]}
            actions={[<Tag color="default">{task.category}</Tag>,
            <Tag icon={getStatusIcon()} color={getStatusColor()}>{task.status}</Tag>,
            <Tag color={getPriorityColor()}>{task.priority}</Tag>]}
        >
            <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title={task.title}
                description={task.description}
            />
        </Card>
      </>
    )
}

export default TaskItem;