import { Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/SignupPage'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import LoginPage from './pages/LoginPage'
import TransactionPage from './pages/TransactionPage'
import { useState } from 'react'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  // State to track user
 

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage setUser={setUser} />} />

        {/* Private Routes */}
        <Route 
          path='/transactions' 
          element={
            <PrivateRoutes user={user}>
              <TransactionPage user={user} />
            </PrivateRoutes>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
