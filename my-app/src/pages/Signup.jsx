import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    console.log('Signup:', {
      name,
      email,
      password,
      rememberMe,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7]">
      {/* Header */}
      <header className="flex justify-between items-center px-5 md:px-10 py-4 md:py-5 bg-[#FFFDF7]">
        <div className="text-2xl font-bold flex items-center gap-2"></div>

        <button className="bg-transparent border-none text-3xl cursor-pointer text-gray-900 transition-transform duration-300 hover:scale-110">
          ☰
        </button>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        {/* Form Section */}
        <div className="flex items-center justify-center px-5 md:px-16 py-10 md:py-20 overflow-y-auto bg-[#FFFDF7]">
          <div className="w-full max-w-2xl md:max-w-full">
            <h1 className="text-5xl md:text-2xl font-bold text-gray-900 mb-16 md:mb-8 text-left">
              Create an account
            </h1>

            <form onSubmit={handleSignup}>
              {/* Name */}
              <div className="mb-12 md:mb-5">
                <label className="flex items-center gap-3 text-sm font-semibold mb-4 uppercase text-[#FDB913]">
                  <span className="text-2xl">👤</span>
                  <span>Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

              {/* Email */}
              <div className="mb-12 md:mb-5">
                <label className="flex items-center gap-3 text-sm font-semibold mb-4 uppercase text-[#FDB913]">
                  <span className="text-2xl">✉️</span>
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
                  <span className="text-2xl">🔒</span>
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
                      hover:text-[#FDB913]
                    "
                  >
                    {showPassword ? '🔓' : '🔒'}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-12 md:mb-5">
                <label className="flex items-center gap-3 text-sm font-semibold mb-4 uppercase text-[#FDB913]">
                  <span className="text-2xl">🔒</span>
                  <span>Confirm Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="
                      absolute
                      right-0
                      bottom-4
                      bg-transparent
                      border-none
                      cursor-pointer
                      text-base
                      text-gray-500
                      hover:text-[#FDB913]
                    "
                  >
                    {showConfirmPassword ? '🔓' : '🔒'}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-12 md:mb-8 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 accent-[#FDB913] cursor-pointer"
                  />

                  <label
                    htmlFor="rememberMe"
                    className="text-xs text-gray-500 cursor-pointer select-none"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#forgot"
                  className="font-semibold text-[#FDB913] hover:text-[#F4A500] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-lg
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-gray-900
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
                SIGN UP
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-10 text-base text-gray-900">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="
                  text-[#FDB913]
                  font-bold
                  bg-transparent
                  border-none
                  cursor-pointer
                  hover:text-[#F4A500]
                  hover:underline
                "
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