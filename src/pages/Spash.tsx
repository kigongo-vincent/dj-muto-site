import { useEffect } from "react"
import { useNavigate } from "react-router";


const Spash = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/tabs")
        }, 1500);
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="splash flex flex-col justify-end gap-2 items-center pb-10 h-screen w-screen bg-cover">

            <p className="text-[4vw] font-semibold">DJ MUTO PRO</p>
            <p className="text-sm ">uganda’s leading mixtaper</p>
            <small className="text-xs mt-[4rem] opacity-50">all rights reserved &copy; {new Date()?.getFullYear()}</small>
        </div>
    )
}

export default Spash