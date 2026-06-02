import './Loader.css';

export default function Loader({ size = 'medium', className = '' }) {
  const sizeClass = `loader--${size}`;

  return (
    <div className={`loader ${sizeClass} ${className}`.trim()}>
      <div className="loader__spinner"></div>
      <p className="loader__text">Loading...</p>
    </div>
  );
}
