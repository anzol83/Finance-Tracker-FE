import { Route, Routes } from 'react-router'
import './App.css'
import SignupPage from './pages/SignUpPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </>
  )
}

export default App
