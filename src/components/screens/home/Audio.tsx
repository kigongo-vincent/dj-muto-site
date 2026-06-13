import { HeartOutlined, HeartSolid, MenuMeatballs1Solid, SparkOutlined } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import { Activity } from "react"
import TrackMenu from "../../base/TrackMenu"

export type audioAction = "like" | "play" | "more"



export interface MediaI {
    ID: number
    title: string
    caption: string
    isNew: boolean
    liked: boolean
    url: string
    cover?: string
    state?: { volume: number, time: { current: number, total: number } }
    action?: (ID: number, a: audioAction) => void

}

export interface AudioI extends MediaI { }

export const fallbackCover = "https://images.pexels.com/photos/19943363/pexels-photo-19943363.jpeg"
const Audio = (a: AudioI) => {

    const cover = a?.cover?.length != 0 ? a?.cover : fallbackCover

    return (
        <div
            className="bg-ground-1 p-4 sm:gap-4 gap-2  flex cursor-pointer items-center rounded-xl">

            <img src={cover}
                onClick={() => a?.action?.(a?.ID, "play")}
                alt="" className="bg-ground-2 rounded-full h-14 w-14 object-cover" />

            <div
                onClick={() => a?.action?.(a?.ID, "play")}
                className="flex-1 flex flex-col sm:gap-2 gap-1">
                <div className="flex items-center gap-2">
                    <p className="font-medium">{a?.title}</p>
                    <Activity mode={a?.isNew ? "visible" : "hidden"}>
                        <span className="bg-[#D3AA24]/10 text-[#D3AA24] flex items-center gap-1 text-sm  px-4 py-1 rounded-full">
                            <Lineicons icon={SparkOutlined} size={14} />
                            new</span>
                    </Activity>
                </div>
                <p className="text-sm text-text-0/60">{a?.caption}</p>
            </div>

            {/* actions  */}
            <button className="" onClick={() => a?.action?.(a?.ID, "like")}>
                <Lineicons icon={a?.liked ? HeartSolid : HeartOutlined} />
            </button >
            <TrackMenu
                trigger={
                    <button className="rotate-90">
                        <Lineicons icon={MenuMeatballs1Solid} />
                    </button>
                }
            />

        </div>
    )
}

export default Audio