import { Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/SignUpPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginPage from './pages/LoginPage'
import TransactionPage from './pages/TransactionPage'
import { useState } from 'react'


function App() {
  // State to track user
  const [user, setUser] = useState({})
  return (
    <>
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/login' element={<LoginPage setUser={setUser} />} />

      {/* Private Routes */}
      <Route path='/transactions' element={<TransactionPage />} />
    </Routes>

    <ToastContainer />
    </>
  )
}

export default App
