
import { useEffect, useState } from 'react'
import './App.css'
import Routes from './Routes/routes'
import { ImSpinner9 } from "react-icons/im";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';







function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>

      {
        loading ? <div className='h-screen bg-black flex flex-col items-center justify-center'><ImSpinner9 size={35} className="animate-spin text-white mb-4" />
          <p className='text-white text-3xl'>MicroSoft TODO</p></div> : <Routes />
      }

      <ToastContainer />
    </>
  )
}

export default App
