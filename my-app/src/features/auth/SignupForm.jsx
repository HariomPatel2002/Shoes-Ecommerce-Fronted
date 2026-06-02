import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './authSlice';
import { selectIsLoading, selectError } from './authSelectors';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import './SignupForm.css';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(signup(formData));
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={isLoading}
        />
        {error && <p className="error">{error}</p>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
}
