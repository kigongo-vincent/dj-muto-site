import { Activity, type HTMLAttributes } from "react"
import Header from "./Header"
import Tabs from "./Tabs"
import { useLocation } from "react-router"


export interface Props extends HTMLAttributes<HTMLDivElement> { }

const TabsLayout = ({ children }: Props) => {

    const { pathname } = useLocation()

    const fullPage = ["/tabs/playing", "/tabs/bio"].includes(pathname)
    const hideHeader = ["/tabs/bio"]?.includes(pathname)

    return (
        <div>

            {/* header  */}
            <Activity mode={hideHeader ? "hidden" : "visible"}>
                <Header />
            </Activity>

            {/* content  */}
            <div className={`${!fullPage && "px-8 py-4 my-25 "} `}>
                {children}
            </div>

            {/* tabs  */}
            <Tabs />

        </div>
    )
}

export default TabsLayout