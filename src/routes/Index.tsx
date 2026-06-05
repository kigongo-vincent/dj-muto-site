import { Route, Routes } from "react-router"
import Spash from "../pages/Spash"
import TabsRouter from "./tabs"
import AuthRouter from "./auth"


const Index = () => {
    return (
        <Routes>
            <Route path="/" Component={Spash} />
            <Route path="/tabs/*" Component={TabsRouter} />
            <Route path="/auth/*" Component={AuthRouter} />
        </Routes>
    )
}

export default Index