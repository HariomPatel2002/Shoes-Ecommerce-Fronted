import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITH Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Pages WITHOUT Navbar and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
