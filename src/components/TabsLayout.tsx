import { Activity, type HTMLAttributes } from "react"
import Header from "./Header"
import Tabs from "./Tabs"
import { useLocation, } from "react-router"
// import Lineicons from "@lineiconshq/react-lineicons"
// import { PlusSolid } from "@lineiconshq/free-icons"

// const Fab = () => {

//     const navigate = useNavigate()

//     return (

//         <button
//             onClick={() => navigate("/upload/music")}
//             className="h-18 w-18 flex items-center justify-center bg-primary rounded-full fixed right-5 bottom-[9vh] z-60">
//             <Lineicons icon={PlusSolid} />
//         </button>
//     )
// }


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

            {/* <Fab /> */}

        </div>
    )
}

export default TabsLayout