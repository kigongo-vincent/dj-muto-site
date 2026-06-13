import { Activity, type ReactNode } from "react"
import { Lineicons } from "@lineiconshq/react-lineicons";
import { Globe1Solid, HeartSolid, Home2Solid, PlaySolid } from "@lineiconshq/free-icons";
import ProfilePic from "../assets/muto.jpg"
import { useLocation, useNavigate } from "react-router";


export interface TabI {
    icon: ReactNode
    title?: string
    path: string

}
const Tab = (t: TabI) => {

    const { pathname } = useLocation()

    const isActive = pathname == t?.path
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(t?.path)}
            className={`flex cursor-pointer relative flex-col items-center justify-center gap-1 ${isActive && "text-primary"}`}>
            <div>{t?.icon}</div>

            <Activity mode={isActive && t?.title == "bio" ? "visible" : "hidden"}>
                <span className="h-4 w-4 border-3 border-ground-1 rounded-full bg-primary absolute right-0 top-0"></span>
            </Activity>

            <Activity mode={t?.title ? "visible" : "hidden"}>
                <span className="text-[10px] text-text-">{t?.title}</span>
            </Activity>
        </div>
    )

}



const Tabs = () => {

    const tabs: TabI[] = [
        {
            icon: <Lineicons icon={Home2Solid} />,
            path: "/tabs",
            title: "home"
        },
        {
            icon: <Lineicons icon={Globe1Solid} />,
            path: "/tabs/tours",
            title: "tours"
        },
        {
            icon: <div className="relative  w-18 bg-red-400">
                <img src={ProfilePic} className="h-18 absolute border-4 border-ground-0 -top-10 object-cover  rounded-full w-18" />
            </div>,
            path: "/tabs/bio",
            title: "bio"
        },
        {
            icon: <Lineicons icon={HeartSolid} />,
            path: "/tabs/favourites",
            title: "favourites"
        },
        {
            icon: <Lineicons icon={PlaySolid} />,
            path: "/tabs/playing",
            title: "playing"
        },

    ]

    return (
        <div className="fixed bottom-0 bg-ground-1 border-t border-text-0/10  flex items-start py-3 justify-between px-10 w-full">
            {
                tabs?.map((t, i) => <Tab key={i} {...t} />)
            }
        </div>
    )
}

export default Tabs