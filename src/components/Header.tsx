import Lineicons from "@lineiconshq/react-lineicons"
import Logo from "./base/Logo"
import { MenuMeatballs1Solid } from "@lineiconshq/free-icons"


const Header = () => {
    return (
        <div className="flex z-50 items-center fixed top-0 w-full justify-between py-8 border-b border-text-0/10 px-10 bg-ground-1/10 backdrop-blur-md">
            <Logo />

            <button className="rotate-90">
                <Lineicons icon={MenuMeatballs1Solid} />
            </button>

        </div>
    )
}

export default Header