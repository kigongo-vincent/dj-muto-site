import { Search2Solid } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import type { InputHTMLAttributes } from "react"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
}
const Search = ({ ...attr }: Props) => {
    return (
        <div className="bg-ground-1 gap-2 flex items-center p-4 rounded-full">
            <Lineicons icon={Search2Solid} className="text-text-0/60" />
            <input className="flex-1 outline-0" {...attr} />
        </div>
    )
}

export default Search