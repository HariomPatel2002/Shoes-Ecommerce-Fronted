import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';
import SignupForm from '../features/auth/SignupForm';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <SignupForm />
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
