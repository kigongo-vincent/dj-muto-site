import { Route, Routes } from "react-router"
import Login from "../pages/auth/Login"
import EmailSubscriptions from "../pages/auth/EmailSubscriptions"


const auth = () => {
    return (
        <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/email-sub" Component={EmailSubscriptions} />
        </Routes>
    )
}

export default auth