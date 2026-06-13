import { useMemo, type HtmlHTMLAttributes } from "react"
import { usePlaying } from "../../../store/AudioStore"
import formatTime from "../../../lib/time.formatting"

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> { }
const AudioProgress = ({ className }: Props) => {
    const { playing } = usePlaying()
    const coverage = useMemo(() => Math.floor((playing?.state?.time?.current || 0) / (playing?.state?.time?.total || 0) * 100), [playing?.state?.time?.current])
    return (
        <div className={className}>
            <div className={`h-[2px] rounded-full bg-white/40 w-full `}>

                <div
                    style={{ width: `${coverage}%` }}
                    className="h-full  bg-primary flex items-center justify-end">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>

            </div>

            <div className="flex text-sm text-text-0/60 mt-2 justify-between">
                <span>{formatTime(playing?.state?.time?.current || 0)}</span>
                <span>{formatTime(playing?.state?.time?.total || 0)}</span>
            </div>
        </div>
    )
}

export default AudioProgress