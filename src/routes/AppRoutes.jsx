import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/About'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes