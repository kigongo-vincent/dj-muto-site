import { SparkOutlined, HeartSolid, HeartOutlined, MenuMeatballs1Solid } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import { Activity } from "react"
import type { MediaI } from "./Audio"

export interface VideoI extends MediaI { }

const Video = (v: VideoI) => {
    const videoId = new URL(v.url).searchParams.get("v")

    return (
        <div>

            {/* header  */}
            <div
                className="my-4 gap-4 flex cursor-pointer items-center rounded-xl">

                <img src={v?.cover}
                    onClick={() => v?.action?.(v?.ID, "play")}
                    alt="" className="bg-ground-2 rounded-full h-14 w-14 object-cover" />

                <div
                    onClick={() => v?.action?.(v?.ID, "play")}
                    className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <p className="font-medium">{v?.title}</p>
                        <Activity mode={v?.isNew ? "visible" : "hidden"}>
                            <span className="bg-[#D3AA24]/10 text-[#D3AA24] flex items-center gap-1 text-sm  px-4 py-1 rounded-full">
                                <Lineicons icon={SparkOutlined} size={14} />
                                new</span>
                        </Activity>
                    </div>
                    <p className="text-sm text-text-0/60">{v?.caption}</p>
                </div>

                {/* actions  */}
                <button className="" onClick={() => v?.action?.(v?.ID, "like")}>
                    <Lineicons icon={v?.liked ? HeartSolid : HeartOutlined} />
                </button >
                <button onClick={() => v?.action?.(v?.ID, "more")} className="rotate-90">
                    <Lineicons icon={MenuMeatballs1Solid} />
                </button>

            </div>

            <iframe
                className="h-[50vh] w-full rounded-lg bg-ground-1"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

export default Video