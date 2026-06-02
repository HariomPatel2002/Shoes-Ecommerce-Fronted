import './Button.css';

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = '',
}) {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
