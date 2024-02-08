import React, { useState } from "react";

// Import Iscons from React Icons
import { RxCross1 } from "react-icons/rx";
import { IoReorderThree } from "react-icons/io5";

import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
// Import Link from React Router Dom
import { useSelector } from "react-redux";


interface statedata {
    todo: {
        login: Boolean
    }
}

interface Favtodo {
    todo: {
        fav: string[]
    }
}

const SideBar: React.FC = () => {
    const login = useSelector((state: statedata) => state.todo.login)
    const impTodo = useSelector((state: Favtodo) => state.todo.fav)

    // Array of side bar menues with multiple objects
    const menus = [
        { name: "My day", link: "/", icon: MdOutlineWbSunny },
        { name: "Important", link: "/important", icon: FaRegStar },
        { name: "Tasks", link: "/", icon: IoHomeOutline },
    ]

    // State for handling the toggle functionality of the sideBar
    const [open, setOpen] = useState(true);

    return (


        // This is the main section div of the sideBar
        <section className="flex flex-col  relative  sideBar" style={{ overflowY: "scroll" }}>


            {/* The second main div for wrapping the elements of sideBar */}
            <div
                className={`h-screen absolute transition-all shadow-2xl  duration-500 text-gray-100 px-4 ${open ? "w-72" : "w-14"
                    }`}
                style={{
                    position: "fixed",

                    left: 0,
                    backgroundColor: open ? 'white' : 'transparent',
                    backdropFilter: open ? 'blur(10px)' : 'none',
                }}
            >

                {/* This is the div for the toggle button for sideBar */}
                <div className=" flex justify-end pt-7">
                    {open ? (
                        <RxCross1
                            onClick={() => setOpen(!open)}
                            size={30}
                            className="cursor-pointer text-black"
                        />
                    ) : (
                        <IoReorderThree
                            onClick={() => setOpen(!open)}
                            size={30}
                            className="cursor-pointer text-black  "
                        />
                    )}
                </div>
                {/* End of the toggle bar div */}



                {/* This div contains the sideBar navigation links */}
                <div className={`mt-4 ${open ? "block" : "hidden"} flex flex-col gap-4`}>
                    {
                        login ? (
                            <div>
                                <p className="text-black text-2xl pl-2">{localStorage.getItem("name")}</p>
                            </div>
                        ) : ""
                    }
                    {/* We can just map over the sideBar menus array */}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu.link}
                            className={`group flex cursor-pointer rounded-lg items-center text-sm gap-5 font-medium p-2 hover:bg-gray-300   ${open ? "mt-1" : "hidden"
                                }`}
                        >
                            {open && (
                                <div className="text-black">{React.createElement(menu?.icon, { size: "25" })}</div>
                            )}

                            <h2
                                className={`transition-all text-1xl font-normal duration-500 whitespace-pre ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                    color: "black"
                                }}
                            >
                                {menu?.name}
                                {menu.name === "Important" ? <p>{impTodo.length}</p> : ""}
                            </h2>


                        </Link>

                    ))}
                </div>
                {/* This is the end of the sideBar navigation links div */}

            </div>
            {/* End of the second main wrapper div */}


        </section>
        // End of the section div
    );
};

export default SideBar;