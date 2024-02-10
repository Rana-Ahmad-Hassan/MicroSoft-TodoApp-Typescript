import { useEffect, useState } from 'react'
import './App.css'
import Routes from './Routes/routes'
import { ImSpinner9 } from "react-icons/im";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

interface statedata {
  todo: {
      login: Boolean,
      toggleTheme: Boolean

  }
}
function App() {
  const [loading, setLoading] = useState(true)
  const toggleTheme= useSelector((state:statedata)=>state.todo.toggleTheme)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section className={`${toggleTheme ? "bg-[#11100F] text-white" : "bg-white"} h-screen`}>

      {
        loading ? <div className='h-screen bg-blue-700 flex flex-col items-center justify-center'><ImSpinner9 size={35} className="animate-spin text-white mb-4" />
          <div className='flex items-center'>
            <img src="https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png" className='w-20' alt="" />
            <p className='text-white text-3xl'>MicroSoft TODO</p>
          </div>

        </div> : <Routes />
      }

      <ToastContainer />
    </section>
  )
}

export default App
