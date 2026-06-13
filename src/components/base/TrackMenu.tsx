import { useState, type ReactNode } from "react"
import Modal from "./Modal"
import Lineicons from "@lineiconshq/react-lineicons"
import { Download1Solid, HandStopSolid, HeartOutlined, HeartSolid, PauseSolid, PlaySolid, Volume1Solid, VolumeMuteSolid } from "@lineiconshq/free-icons"
import { usePlaying } from "../../store/AudioStore"
import type { AudioI } from "../screens/home/Audio"

export interface Props {
    trigger: ReactNode
    content?: ReactNode
}

const TrackMenu = ({ trigger }: Props) => {

    const [open, setOpen] = useState(false)
    const { isPlaying, setIsPlaying, playing, setPlaying } = usePlaying()

    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const handleLike = () => {
        setPlaying({ ...playing, liked: !playing?.liked } as AudioI)
    }

    const handleDownload = () => {
        alert("downloading...")
        setOpen(false)
    }

    // const handleAddToQueue = () => {

    // }

    const handleMuteTrack = () => {
        setPlaying({ ...playing, state: { ...playing?.state, volume: playing?.state?.volume == 0 ? 1 : 0 } } as AudioI)
    }
    const handleStopTrack = () => {
        setPlaying(null)
        setIsPlaying(false)
    }

    return (
        <div>
            {/* trigger  */}
            <span className="cursor-pointer" onClick={() => setOpen(true)}>{trigger}</span>
            {/* content  */}
            <Modal open={open} onClose={() => setOpen(false)}>

                <div className="flex flex-col gap-3 w-full h-full">
                    <button onClick={handlePlay} className="hover:bg-ground-0 border-b border-text-0/10  gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={!isPlaying ? PlaySolid : PauseSolid} />
                        <span>{isPlaying ? "pause" : "play"}</span>
                    </button>
                    <button onClick={handleLike} className="hover:bg-ground-0 border-b border-text-0/10  gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={playing?.liked ? HeartSolid : HeartOutlined} />
                        <span>{playing?.liked ? "remove from" : "add to"} favourites</span>
                    </button>
                    {/* <button onClick={handleAddToQueue} className="hover:bg-ground-0 border-b border-text-0/10  gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={NextStep2Solid} />
                        <span>Add to play next</span>
                    </button> */}
                    <button
                        onClick={handleMuteTrack} className="hover:bg-ground-0 border-b border-text-0/10  gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={playing?.state?.volume == 0 ? Volume1Solid : VolumeMuteSolid} />
                        <span>{playing?.state?.volume == 0 ? "Un" : ""}Mute track</span>
                    </button>
                    <button onClick={handleStopTrack} className="hover:bg-ground-0 border-b border-text-0/10  gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={HandStopSolid} />
                        <span>stop track from playing</span>
                    </button>
                    <button onClick={handleDownload} className="hover:bg-ground-0   gap-2 h-14 w-full flex justify-start items-center px-6">
                        <Lineicons icon={Download1Solid} />
                        <span>download</span>
                    </button>
                </div>

            </Modal>
        </div>
    )
}

export default TrackMenu