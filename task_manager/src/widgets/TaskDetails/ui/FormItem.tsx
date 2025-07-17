import type { FormFieldProps } from "../model"
import { Form, Input, Select, message } from 'antd';

const { TextArea } = Input;

export const FormItem: React.FC<{prop: FormFieldProps}> = ({prop}) => {

    const rules = prop.required ? [{ required: true, message: `Пожалуйста, введите ${prop.label.toLowerCase()}` }] : [];

    const renderControl = () => {
    switch (prop.type) {
      case 'textarea':
        return <TextArea rows={4} />;
      case 'select':
        return (
          <Select>
            {prop.options?.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        );
      default:
        return <Input />;
    }
  };

  return (
    <Form.Item name={prop.name} label={prop.label} rules={rules}>
      {renderControl()}
    </Form.Item>
  );
}