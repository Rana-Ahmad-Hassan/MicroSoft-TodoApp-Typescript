import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdPerson } from "react-icons/io";
import { handleLogOut } from '../../features/todoSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface statedata {
    todo: {
        login: Boolean
    }
}


const Navbar: React.FC = () => {
    const dispatch = useDispatch()
    const login = useSelector((state: statedata) => state.todo.login)
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

    const handleDeleteUser= ()=>{
     
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
        <body className="bg-blue-500">
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


                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">



                    <li><a className="text-sm text-white " href="#">Home</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>


                    <li><a className="text-sm text-white " href="#">About Us</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>


                    <li><a className="text-sm text-white" href="#">Services</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>


                    <li><a className="text-sm text-white" href="#">Pricing</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>


                    <li><a className="text-sm text-white" href="#">Contact</a></li>
                </ul>
                {
                    login ?


                        <div className='ml-auto flex flex-col items-center'>
                            <button onClick={handleDeleteUser} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">LogOut</button>
                        </div>




                        : <NavLink to={"/signIn"} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Sign In</NavLink>
                }
                <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
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
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                            </li>
                        </ul>
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
        </body>
    );
};

export default Navbar;
