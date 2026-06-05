import { Route, Routes } from "react-router"
import Home from "../pages/tabs/Home"
import TabsLayout from "../components/TabsLayout"
import Tours from "../pages/tabs/Tours"
import Bio from "../pages/tabs/Bio"
import Favourites from "../pages/tabs/Favourites"
import Playing from "../pages/tabs/Playing"


const tabs = () => {

    return (
        <TabsLayout>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/tours" Component={Tours} />
                <Route path="/bio" Component={Bio} />
                <Route path="/favourites" Component={Favourites} />
                <Route path="/playing" Component={Playing} />
            </Routes>
        </TabsLayout>
    )
}

export default tabs