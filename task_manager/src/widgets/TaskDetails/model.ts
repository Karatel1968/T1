export interface FormFieldProps {
  name: string;
  label: string;
  type: 'input' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  required?: boolean;
}