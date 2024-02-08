import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdPerson } from "react-icons/io";
import { handleLogOut, handleToggleTheme } from '../../features/todoSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IoSettings } from 'react-icons/io5';
import { RxCross1 } from "react-icons/rx";



interface statedata {
    todo: {
        login: Boolean,
        toggleTheme: Boolean

    }
}


const Navbar: React.FC = () => {
    const [settings, setSettings] = useState(false)
    const dispatch = useDispatch()
    const login = useSelector((state: statedata) => state.todo.login)
    const toggleTheme = useSelector((state: statedata) => state.todo.toggleTheme)


    const handleSettings = () => {
        setSettings(true)
    }

    const handleCloseSettings = () => {
        setSettings(false)
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleToogleDarkMode = () => {
        dispatch(handleToggleTheme())
    }
    useEffect(() => {
        const handleMenu = () => {
            const menu = document.querySelectorAll('.navbar-menu');
            for (let i = 0; i < menu.length; i++) {
                menu[i].classList.toggle('hidden');
            }
        };

        const burger = document.querySelectorAll('.navbar-burger');
        if (burger.length) {
            for (let i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', handleMenu);
            }
        }

        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        const handleCloseMenu = () => {
            const menu = document.querySelectorAll('.navbar-menu');
            for (let i = 0; i < menu.length; i++) {
                menu[i].classList.toggle('hidden');
            }
        };

        if (close.length) {
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click', handleCloseMenu);
            }
        }

        if (backdrop.length) {
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', handleCloseMenu);
            }
        }

        return () => {
            if (burger.length) {
                for (let i = 0; i < burger.length; i++) {
                    burger[i].removeEventListener('click', handleMenu);
                }
            }
            if (close.length) {
                for (let i = 0; i < close.length; i++) {
                    close[i].removeEventListener('click', handleCloseMenu);
                }
            }
            if (backdrop.length) {
                for (let i = 0; i < backdrop.length; i++) {
                    backdrop[i].removeEventListener('click', handleCloseMenu);
                }
            }
        };
    }, []);

    const handleDeleteUser = () => {

        alert("Are you really want to logout")
        dispatch(handleLogOut())
        toast.error("User delete successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        })


    }



    return (
        <body className="bg-blue-500 relative z-40">
            <nav className="relative px-10 py-2 flex justify-between items-center bg-blue-600 ">
                <a className="text-3xl font-bold leading-none" href="#">
                    <p className='font-medium text-white text-[30px]'>To Do</p>
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-white p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>



                {
                    login ?


                        <div className='ml-auto flex flex-col items-center'>
                            <button onClick={handleDeleteUser} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">LogOut</button>
                        </div>




                        : <NavLink to={"/signIn"} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Sign In</NavLink>
                }
                <IoSettings size={25} onClick={handleSettings} className="text-white hover:cursor-pointer hover:text-gray-200" />

            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <p className='font-medium text-[1.3vw]'>To Do</p>
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-auto">
                        <div className="pt-6">
                            {
                                login ? <IoMdPerson size={25} /> : <NavLink to={"/signIn"} className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">Sign in</NavLink>
                            }
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>

            {
                settings ? <div className='fixed top-24 pt-1 right-0 z-50 shadow-2xl'>
                    <div className={`h-screen ${toggleTheme ? "bg-black" : "bg-white"} py-10 px-5 w-96`}>
                        <div className='flex flex-col items-end'>
                            <RxCross1 size={20} onClick={handleCloseSettings} className="text-black hover:cursor-pointer" />
                        </div>
                        <div className='flex justify-between mt-10'>
                            <p className='  text-lg'>DARK MODE</p>
                            <label className="relative inline-flex items-center me-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isChecked}
                                    onChange={handleChange}
                                    onClick={handleToogleDarkMode}
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4   dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  "></div>


                            </label>
                        </div>
                    </div>
                </div> : ""
            }

        </body>
    );
};

export default Navbar;
