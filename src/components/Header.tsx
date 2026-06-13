import Lineicons from "@lineiconshq/react-lineicons"
import Logo from "./base/Logo"
import { CloudUploadSolid, Envelope1Solid, MenuMeatballs1Solid } from "@lineiconshq/free-icons"
import { useState } from "react"
import Modal from "./base/Modal"
import { useNavigate } from "react-router"


const Header = () => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    return (
        <div className="flex z-50 items-center fixed top-0 w-full justify-between py-8 border-b border-text-0/10 px-10 bg-ground-1/10 backdrop-blur-md">
            <Logo />

            <button className="rotate-90" onClick={() => setOpen(true)}>
                <Lineicons icon={MenuMeatballs1Solid} />
            </button>

            {/* header modal */}
            <Modal open={open} position="right" className="bg-ground-1 flex flex-col gap-3" onClose={() => setOpen(false)}>

                <button
                    onClick={() => navigate("/auth/email-sub")}
                    className="bg-ground-2  gap-2 font-medium w-full flex items-center justify-center py-3 rounded">
                    <Lineicons icon={Envelope1Solid} />
                    subscribe for notifications

                </button>
                <button
                    onClick={() => navigate("/upload/music")}
                    className="bg-ground-2  gap-2 font-medium w-full flex items-center justify-center py-3 rounded">
                    <Lineicons icon={CloudUploadSolid} />
                    upload

                </button>
                <button
                    onClick={() => navigate("/auth/login")}
                    className="bg-primary text-ground-0 font-medium w-full flex items-center justify-center py-3 rounded">
                    login
                </button>

            </Modal>

        </div>
    )
}

export default Header