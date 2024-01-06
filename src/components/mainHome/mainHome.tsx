import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addFavTodo } from "../../features/todoSlice";

interface statedata {
    todo: {
        data: string[]
    }
}

interface searchQuery {
    todo: {
        searchQuery: string
    }
}




const MainHome: React.FC = () => {

    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()
    const data = useSelector((state: statedata) => state.todo.data)
    const searchQuery = useSelector((state: searchQuery) => state.todo.searchQuery)
    console.log(searchQuery)

    const filterData = data.filter((item) => item.toUpperCase().includes(searchQuery.toUpperCase()))

    console.log(filterData)


    // define the fuction here to just add todo to the global state in our freature component
    const handleAddTodo = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(todo))
    }

    // here i am defining the function for adding the item for favourite in the global state in our feature folder
    const handleFavourite = (item: string) => {
        dispatch(addFavTodo(item))
    }

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
            <div className="2xl:mx-5">

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
                        <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="Ada a task" className="bg-transparent py-3 text-gray-600 px-4 focus:outline-none w-full" />
                    </div>
                </div>


                {/* This is the div for the button for adding the todo */}
                <div className="bg-white shadow-lg flex justify-end">
                    <button onClick={handleAddTodo} className="px-5  bg-white hover:bg-gray-100 hover:rounded-lg py-2 border my-2 mx-1">Add</button>
                </div>



                <div className="mt-10">


                    {data.map((item) => {
                        return (
                            <div className="bg-sky-100 my-5 flex justify-between text-stone-700 shadow-lg p-4 ">
                                <p>{item}</p>
                                <FaRegStar onClick={() => handleFavourite(item)} size={20} className="cursor-pointer  text-blue-600  active:text-orange-400" />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
};

export default MainHome;
