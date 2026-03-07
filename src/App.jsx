import './App.css'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from "react-hot-toast";

function App() {


  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <AppRoutes />
    </>
  )
}

export default App
