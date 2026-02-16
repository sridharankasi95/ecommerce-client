import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/About'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes