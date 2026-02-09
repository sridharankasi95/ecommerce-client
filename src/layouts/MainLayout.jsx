import  Navbar  from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import  Footer  from '../components/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default MainLayout