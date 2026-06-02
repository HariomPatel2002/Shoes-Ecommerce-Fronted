import './Input.css';

export default function Input({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onBlur,
  disabled = false,
  className = '',
  name = '',
  required = false,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      className={`input ${className}`.trim()}
      name={name}
      required={required}
      {...props}
    />
  );
}
