import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';
import LoginForm from '../features/auth/LoginForm';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <LoginForm />
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}
