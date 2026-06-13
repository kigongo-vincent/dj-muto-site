// import { usePlaying } from "../../store/AudioStore"
import Photo from "../../assets/speaker.webp"
import Lineicons from "@lineiconshq/react-lineicons"
import { Bell1Solid } from "@lineiconshq/free-icons"


const Playing = () => {

    // const { playing } = usePlaying()

    return (
        <div

            className=" rounded-4xl  relative h-screen">

            {/* cover  */}
            <img src={Photo} className="absolute  h-full w-full object-cover" alt="" />

            {/* overlay  */}
            <div className="bg-gradient-to-t  flex flex-col items-center justify-center gap-3  px-10 from-black to-black/70 absolute h-full w-full ">

                <div className="w-full">
                    <p className="mb-2 text-text-0/80 text-sm">Please enter your email*</p>
                    <input type="email" className="outline-0 border border-text-0/10 bg-gray-300/5 w-full h-14 rounded p-4" placeholder="email" />
                </div>

                <button className="bg-primary  h-14 flex items-center justify-center gap-2 rounded w-full">
                    <Lineicons icon={Bell1Solid} />
                    subscribe
                </button>

            </div>



        </div>
    )
}

export default Playing