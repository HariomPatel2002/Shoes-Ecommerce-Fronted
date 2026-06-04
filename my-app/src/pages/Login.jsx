import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="logo"></div>
        <button className="menu-button">☰</button>
      </header>

      {/* Main Container */}
      <div className="login-container">
        {/* Right Side - Form */}
        <div className="login-right">
          <div className="form-wrapper">
            <h1 className="login-title">Login</h1>

            <form onSubmit={handleLogin}>
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
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🔓' : '🔒'}
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

              {/* Login Button */}
              <button type="submit" className="login-button">
                LOGIN
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="signup-link">
              Don't have an account?{' '}
              <button
                className="signup-text"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;