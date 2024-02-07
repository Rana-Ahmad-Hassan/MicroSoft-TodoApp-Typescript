
import { Outlet } from "react-router"
import { useSelector } from "react-redux"
import SignInPage from "../pages/signInPage/signInPage"
interface statedata {
    todo: {
        login: Boolean
    }
}
const PrivateRoutes = () => {

    const login = useSelector((state: statedata) => state.todo.login)
    return (
        <>
            {login ? <Outlet /> : <SignInPage />}
        </>
    )
}

export default PrivateRoutes