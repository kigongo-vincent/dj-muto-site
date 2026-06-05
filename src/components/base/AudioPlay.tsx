import { useEffect, useRef } from "react"
import { usePlaying } from "../../store/AudioStore"
import { fallbackCover } from "../screens/home/Audio"
import Lineicons from "@lineiconshq/react-lineicons"
import { HeartOutlined, HeartSolid, MenuMeatballs1Solid, NextStep2Solid, PlaySolid, PreviousStep2Solid } from "@lineiconshq/free-icons"
import { useLocation } from "react-router"


const AudioPlay = () => {

    const { playing, isPlaying } = usePlaying()
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (playing) {
            isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause()
        }
    }, [isPlaying, playing])
    const cover = playing?.cover?.length != 0 ? playing?.cover : fallbackCover

    const { pathname } = useLocation()

    const hidePlayer = pathname == "/tabs/playing" || pathname == "/"

    if (playing == null) {
        return
    }


    return (
        <>
            <div className={`fixed  bottom-[10vh] w-full p-4 z-60 ${hidePlayer && "hidden"}`}>

                <div className="w-full flex gap-4 justify-between bg-ground-1/40 backdrop-blur-md border border-text-0/5 p-4 rounded ">

                    <img src={cover}
                        alt="" className="bg-ground-2 rounded-full h-14 w-14 object-cover" />

                    <div className="flex items-center gap-4">
                        <button className="text-text-0/50">
                            <Lineicons icon={PreviousStep2Solid} />
                        </button>
                        <button>
                            <Lineicons icon={PlaySolid} />
                        </button>
                        <button className="text-text-0/50">
                            <Lineicons icon={NextStep2Solid} />
                        </button>
                    </div>


                    <div className="flex items-center gap-2">
                        <button className="" onClick={() => playing?.action?.(playing?.ID, "like")}>
                            <Lineicons icon={playing?.liked ? HeartSolid : HeartOutlined} />
                        </button >
                        <button onClick={() => playing?.action?.(playing?.ID, "more")} className="rotate-90">
                            <Lineicons icon={MenuMeatballs1Solid} />
                        </button>
                    </div>

                </div>

            </div>
            <audio className="hidden" src={playing?.url} ref={audioRef} />
        </>

    )
}

export default AudioPlay