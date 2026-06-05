import Lineicons from "@lineiconshq/react-lineicons"
import { usePlaying } from "../../store/AudioStore"
import { MenuHamburger1Solid, NextStep2Solid, PlaySolid, PreviousStep2Solid, SparkOutlined } from "@lineiconshq/free-icons"
import { Activity } from "react"
import AudioProgress from "../../components/screens/playing/AudioProgress"


const Playing = () => {

    const { playing } = usePlaying()

    return (
        <div

            className=" rounded-4xl  relative h-screen">

            {/* cover  */}
            <img src={playing?.cover} className="absolute h-full w-full object-cover" alt="" />

            {/* overlay  */}
            <div className="bg-gradient-to-t pt-[12vh] px-10 from-ground-0 to-ground-0/90 absolute h-full w-full ">

                {/* header  */}
                <div className="flex justify-end">
                    <div className="bg-white/10 rounded-full h-16 flex items-center justify-center w-16">
                        <Lineicons icon={MenuHamburger1Solid} />
                    </div>
                </div>

                {/* player  */}
                <div className=" mt-[40vh]">

                    {/* details  */}
                    <div>
                        <div
                            className=" gap-4 flex cursor-pointer items-center rounded-xl">

                            <img src={playing?.cover}
                                onClick={() => playing?.action?.(playing?.ID, "play")}
                                alt="" className="bg-ground-2 rounded-full h-14 w-14 object-cover" />

                            <div
                                onClick={() => playing?.action?.(playing?.ID, "play")}
                                className="flex-1 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <p className="font-medium">{playing?.title}</p>
                                    <Activity mode={playing?.isNew ? "visible" : "hidden"}>
                                        <span className="bg-[#D3AA24]/10 text-[#D3AA24] flex items-center gap-1 text-sm  px-4 py-1 rounded-full">
                                            <Lineicons icon={SparkOutlined} size={14} />

                                            brand new</span>
                                    </Activity>
                                </div>
                                <p className="text-sm text-text-0/60">{playing?.caption}</p>
                            </div>
                        </div>
                    </div>

                    {/* progress  */}
                    <AudioProgress className="my-6" />

                    {/* controls  */}
                    <div className="flex items-center w-full justify-center gap-4">
                        <button className="text-text-0/50">
                            <Lineicons icon={PreviousStep2Solid} />
                        </button>
                        <button className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                            <Lineicons icon={PlaySolid} size={40} />
                        </button>
                        <button className="text-text-0/50">
                            <Lineicons icon={NextStep2Solid} />
                        </button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Playing