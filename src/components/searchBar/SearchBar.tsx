import { FormEvent, useState } from "react"
import { handleSearch } from "../../features/todoSlice"
import { useDispatch } from "react-redux"



const SearchBar: React.FC = () => {
        const [searchValue, setSearchValue]=useState("")
        const dispatch=useDispatch()

        const handleSearchText=(e:FormEvent)=>{
          e.preventDefault()
          dispatch(handleSearch(searchValue))
          
        }

    return (
        <>
            <div className='w-full mx-auto '>
                <div className="relative flex items-center w-full h-12    focus-within:shadow-lg y-500 overflow-hidden">
                    <div onClick={handleSearchText}  className="grid place-items-center bg-blue-200 cursor-pointer h-full w-12  text-white">
                        <svg    xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full bg-blue-200 outline-none text-black text-lg pr-2"
                        type="text"
                        id="search"
                        onChange={(e)=>setSearchValue(e.target.value)}
                        placeholder="Search something.." />
                </div>
            </div>
        </>
    )
}

export default SearchBar