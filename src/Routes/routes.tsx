import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import SearchBar from "../components/searchBar/SearchBar"
import SideBar from "../components/sidebar/SideBar"
import Home from "../pages/Home/home"


const Routes:React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <SearchBar/>
    
      <div className="grid grid-cols-12">
       <div className="
       col-span-2">
         <SideBar/>
       </div>

       <div className="col-span-10 mt-7">
       <ReactRoutes>
            <Route path="/" element={<Home/>}>

            </Route>
       </ReactRoutes>
       </div>
      </div>
    

    </BrowserRouter>
    </>
  )
}

export default Routes