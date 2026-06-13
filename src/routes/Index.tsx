import { Route, Routes } from "react-router"
import Spash from "../pages/Spash"
import TabsRouter from "./tabs"
import AuthRouter from "./auth"
import UploadPage from "../pages/upload/Index"


const Index = () => {
    return (
        <Routes>
            <Route path="/" Component={Spash} />
            <Route path="/tabs/*" Component={TabsRouter} />
            <Route path="/upload/:t" Component={UploadPage} />
            <Route path="/auth/*" Component={AuthRouter} />
        </Routes>
    )
}

export default Index