import React from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../../app/providers/TaskProvider/TaskProvider';
import { TaskCategory, TaskStatus, TaskPriority } from "../../AboutTask/AboutTask";

const { TextArea } = Input;

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { tasks, addTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  
  const task = tasks.find(t => t.id === id) || null;

  
  React.useEffect(() => {
    if (task) form.setFieldsValue(task);
  }, [task, form]);

  const handleSubmit = (values: any) => {
    if (task) {
      updateTask(task.id, values);
      message.success('Задача обновлена');
    } else {
      addTask(values);
      message.success('Задача создана');
    }
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2>{task ? 'Редактировать задачу' : 'Новая задача'}</h2>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          category: TaskCategory.Feature,
          status: TaskStatus.Todo,
          priority: TaskPriority.Medium
        }}
      >
        <Form.Item name="title" label="Название" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Описание">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name="category" label="Категория">
          <Select>
            {Object.values(TaskCategory).map(cat => (
              <Select.Option key={cat} value={cat}>{cat}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="status" label="Статус">
          <Select>
            {Object.values(TaskStatus).map(status => (
              <Select.Option key={status} value={status}>{status}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="priority" label="Приоритет">
          <Select>
            {Object.values(TaskPriority).map(priority => (
              <Select.Option key={priority} value={priority}>{priority}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {task ? 'Обновить' : 'Создать'}
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => navigate('/')}>
            Отмена
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TaskDetails;