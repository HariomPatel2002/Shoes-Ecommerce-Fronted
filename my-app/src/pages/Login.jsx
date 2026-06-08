import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col bg-[#FFFDF7]">

      {/* Header */}
      <header className="flex justify-between items-center px-5 md:px-10 py-4 md:py-5 bg-[#FFFDF7]">
        <div className="text-2xl font-bold flex items-center gap-2"></div>

        <button className="border-none bg-transparent text-3xl cursor-pointer text-gray-900 transition-transform duration-300 hover:scale-110">
          ☰
        </button>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex justify-center items-center w-full">

        {/* Login Form */}
        <div className="flex items-center justify-center px-5 md:px-10 w-fit min-w-96 md:min-w-full bg-[#FFFDF7]">

          <div className="w-full md:w-96">

            <h1 className="text-5xl md:text-3xl font-bold text-gray-900 mb-16 md:mb-8 text-left">
              Login
            </h1>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-12 md:mb-5">
                <label className="flex items-center gap-3 text-sm font-semibold mb-4 uppercase text-[#FDB913]">
                  <span className="text-2xl flex items-center justify-center">
                    ✉️
                  </span>
                  <span>Email</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    w-full
                    px-0
                    py-4
                    border-0
                    border-b-2
                    border-gray-200
                    bg-transparent
                    text-base
                    text-gray-900
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:border-b-4
                    focus:border-b-[#FDB913]
                    placeholder:text-gray-300
                  "
                />
              </div>

              {/* Password */}
              <div className="mb-12 md:mb-5">
                <label className="flex items-center gap-3 text-sm font-semibold mb-4 uppercase text-[#FDB913]">
                  <span className="text-2xl flex items-center justify-center">
                    🔒
                  </span>
                  <span>Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="
                      w-full
                      px-0
                      py-4
                      border-0
                      border-b-2
                      border-gray-200
                      bg-transparent
                      text-base
                      text-gray-900
                      transition-all
                      duration-300
                      focus:outline-none
                      focus:border-b-4
                      focus:border-b-[#FDB913]
                      placeholder:text-gray-300
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-0
                      bottom-4
                      bg-transparent
                      border-none
                      cursor-pointer
                      text-base
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-[#FDB913]
                    "
                  >
                    {showPassword ? '🔓' : '🔒'}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mb-12 md:mb-8 text-xs flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center">

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 cursor-pointer accent-[#FDB913]"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="cursor-pointer text-gray-500 select-none text-xs"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#forgot"
                  className="text-[#FDB913] font-semibold hover:text-[#F4A500] hover:underline transition-colors duration-300"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-4
                  text-gray-900
                  rounded-lg
                  text-base
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  active:translate-y-0
                  bg-gradient-to-r
                  from-[#FDB913]
                  to-[#F4A500]
                "
              >
                LOGIN
              </button>
            </form>

            {/* Signup */}
            <div className="text-center mt-10 text-base text-gray-900">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="
                  text-[#FDB913]
                  font-bold
                  hover:text-[#F4A500]
                  hover:underline
                  transition-colors
                  duration-300
                  bg-transparent
                  border-none
                  p-0
                  cursor-pointer
                "
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