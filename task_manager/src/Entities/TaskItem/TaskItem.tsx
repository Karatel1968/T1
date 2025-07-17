import type { Task } from "../../shared/model/AboutTask"
import { Avatar, Card } from 'antd';
import { EditOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {Tag} from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const TaskItem: React.FC<{task: Task}> = ({task}) => {

    const navigate = useNavigate();

    const { Meta } = Card;

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

    return(
        <Card style={{ width: 320 }}
            title={task.title}
            extra={
                <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => navigate(`/task/${task.id}`)}
                />
                
            }
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
        
    )
}

export default TaskItem;