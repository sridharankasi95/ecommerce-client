import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/About'

function App() {


  return (
    <Routes>
     <Route path='/' element={<HomePage />} >Home page</Route>
     <Route path='/about' element={<AboutPage />} >About page</Route>
      </Routes>
  )
}

export default App
