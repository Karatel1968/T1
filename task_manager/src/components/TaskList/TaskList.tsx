import { Flex, Space } from 'antd';
import TaskItem from "../TaskItem/TaskItem";
import { TaskCategory, TaskStatus, TaskPriority } from "../../AboutTask/AboutTask";
import React from 'react';
import { useTasks } from "../../TaskContext";
import {PlusOutlined} from '@ant-design/icons';
import { Button, Form, Input, Select, Modal } from 'antd';
import { useState } from 'react';
import './TaskList.css'

const { TextArea } = Input;
const { Option } = Select;

const TaskList: React.FC = () => {
    const { tasks, addTask } = useTasks();
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = React.useState<string>('horizontal');

    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        addTask({
          title: values.title,
          description: values.description,
          category: values.category,
          status: values.status,
          priority: values.priority
        });
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

    return(
        <div className="task-list">
            <main className="container">   
                    <Button 
                        type="primary" 
                        icon={<PlusOutlined />} 
                        onClick={showModal}
                        style={{ marginBottom: 16 }}
                    >
                        Добаавить задачу
                    </Button>
                    <Modal
                        title="Новая задача"
                        visible={isModalVisible}
                        onOk={handleSubmit}
                        onCancel={handleCancel}
                        okText="Создать"
                        cancelText="Отмена"
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            initialValues={{
                                category: TaskCategory.Feature,
                                status: TaskStatus.Todo,
                                priority: TaskPriority.Medium,
                            }}
                        >
                        <Form.Item
                            name="title"
                            label="Название"
                            rules={[{ required: true, message: 'Введите название задачи!' }]}
                        >
                            <Input placeholder="Что нужно сделать?" />
                        </Form.Item>

                        <Form.Item name="description" label="Описание">
                            <TextArea rows={4} placeholder="Детали задачи..." />
                        </Form.Item>

                        <Form.Item name="category" label="Категория">
                            <Select>
                            {Object.values(TaskCategory).map(category => (
                                <Option key={category} value={category}>{category}</Option>
                            ))}
                            </Select>
                        </Form.Item>

                        <Form.Item name="status" label="Статус">
                            <Select>
                            {Object.values(TaskStatus).map(status => (
                                <Option key={status} value={status}>{status}</Option>
                            ))}
                            </Select>
                        </Form.Item>

                        <Form.Item name="priority" label="Приоритет">
                            <Select>
                            {Object.values(TaskPriority).map(priority => (
                                <Option key={priority} value={priority}>{priority}</Option>
                            ))}
                            </Select>
                        </Form.Item>
                        </Form>
                    </Modal>
                <section className="section-with-tasks">
                    <Flex style={{ width: 1000 }} vertical={value ==='vertical'}>
                        <Space size={[15, 15]} wrap>
                        {tasks.map(task => ( 
                            <TaskItem task={task}/>  
                        ))}
                        </Space>
                    </Flex>
                </section>
            </main>
        </div>
    )
}

export default TaskList;