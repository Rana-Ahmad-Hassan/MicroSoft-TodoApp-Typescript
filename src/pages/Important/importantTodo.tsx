import { FaRegStar } from "react-icons/fa"
import { useSelector } from "react-redux"

interface Favtodo {
  todo: {
    impTodo: string[]
  }
}

function ImportantTodo() {
  const data = useSelector((state: Favtodo) => state.todo.impTodo)
  if (data) {
    console.log(data)
  }
  return (
    <>

      <div className="2xl:mx-5">
        <div className="flex gap-5 mb-10 flex-wrap items-center">
          <FaRegStar size={25} className='text-blue-600' />
          <p className="text-2xl font-lg text-blue-600">IMPORTANT...</p>
        </div>
        {data?.map((item) => {
          return (
            <div className="bg-white border border-gray-200 my-5 flex justify-between text-stone-700 shadow-2xl p-4 ">
              <p>{item}</p>
              <p className="flex flex-wrap gap-4 text-stone-600">imp</p>
            </div>
          )
        })}
      </div>


    </>
  )
}

export default ImportantTodo