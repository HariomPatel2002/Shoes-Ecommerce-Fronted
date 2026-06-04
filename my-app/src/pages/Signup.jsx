import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup:', { name, email, password, rememberMe });
  };

  return (
    <div className="signup-page">
      {/* Header */}
      <header className="signup-header">
        <div className="logo"></div>
        <button className="menu-button">☰</button>
      </header>

      {/* Main Container */}
      <div className="signup-container">
        {/* Right Side - Form */}
        <div className="signup-right">
          <div className="form-wrapper">
            <h1 className="signup-title">Create an account</h1>

            <form onSubmit={handleSignup}>
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="form-icon name-icon">👤</span>
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="form-icon email-icon">✉️</span>
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="form-icon password-icon">🔒</span>
                  <span>Password</span>
                </label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label className="form-label">
                  <span className="form-icon password-icon">🔒</span>
                  <span>Confirm Password</span>
                </label>
                <div className="password-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-input"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? '🔓' : '🔒'}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-footer">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#forgot" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="signup-button">
                SIGN UP
              </button>
            </form>

            {/* Login Link */}
            <div className="login-link">
              Already have an account?{' '}
              <button
                className="login-text"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
