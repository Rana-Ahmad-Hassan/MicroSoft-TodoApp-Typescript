import { MdOutlineRadioButtonUnchecked, MdOutlineWbSunny, MdRadioButtonChecked } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addFavTodo, handledelete } from "../../features/todoSlice";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';



interface statedata {
    todo: {
        data: string[]
    }
}






const MainHome: React.FC = () => {

    const [todo, setTodo] = useState("")
    const [favStar, setFavStar] = useState(false)
    const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
    const dispatch = useDispatch()
    const data = useSelector((state: statedata) => state.todo.data)





    // define the fuction here to just add todo to the global state in our freature component
    const handleAddTodo = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(todo))
        setTodo("")
    }

    // here i am defining the function for adding the item for favourite in the global state in our feature folder
    const handleFavourite = (item: string) => {
        dispatch(addFavTodo(item))
        setFavStar(true)
        toast.success("Important Todo add successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    const handleDelete = (item: string) => {
        dispatch(handledelete(item))
        toast.success("Todo deleted successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleToggleChecked = (item: string) => {
        setChecked(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };


    // here i define the array of days and months for getting them as original days and month

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getDate = new Date();
    const date = getDate.getDate();
    const month = months[getDate.getMonth()];
    const day = days[getDate.getDay()];



    return (
        <>

            {/* This is the main wrrapper div for this whole component */}
            <div className="2xl:mx-5 ">

                {/* this is the main content for the main home page */}
                <div className="">
                    <p className="text-2xl  flex gap-3 items-center flex-wrap"><MdOutlineWbSunny /> My Day </p>
                    {/* Here i can just display the currentday date and year */}
                    <p className="font-thin">{day} - {month} - {date}</p>
                </div>

                {/* this is the div for the input element and a icon */}
                <div>

                    <div className="bg-gray-100 mt-4  rounded border border-gray-200 px-2 flex items-center ">
                        <FaRegCircle className="text-blue-700" />
                        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Ada a task" className="bg-transparent py-3 text-gray-600 px-4 focus:outline-none w-full" />
                    </div>
                </div>


                {/* This is the div for the button for adding the todo */}
                <div className="bg-white shadow-lg flex justify-end">
                    <button onClick={handleAddTodo} className="px-5  bg-blue-400 hover:bg-pink-500 hover:rounded-lg py-2 border my-2 mx-1">Add</button>
                </div>



                <div className="mt-10">


                    {data.map((item, i) => {
                        return (
                            <div className="bg-white border border-gray-200 my-5 flex flex-wrap items-center justify-between text-stone-700 shadow-2xl p-4 " key={i}>
                                {checked[item] ? (
                                    <MdRadioButtonChecked onClick={() => handleToggleChecked(item)} />
                                ) : (
                                    <MdOutlineRadioButtonUnchecked onClick={() => handleToggleChecked(item)} />
                                )}




                                <p className={`flex ${checked[item] ? "line-through" : ""} flex-wrap px-2`}>{item}</p>

                                <div className="ml-auto flex flex-row items-center gap-2">
                                    <FaRegStar onClick={() => handleFavourite(item)} size={20} className={`cursor-pointer ${favStar ? <GoStarFill /> : "text-blue-600"}   `} />
                                    <MdDelete size={20} onClick={() => handleDelete(item)} className="text-red-500 hover:cursor-pointer" />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
};

export default MainHome;
