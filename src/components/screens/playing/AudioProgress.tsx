import type { HtmlHTMLAttributes } from "react"

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> { }
const AudioProgress = ({ className }: Props) => {
    return (
        <div className={className}>
            <div className={`h-[2px] rounded-full bg-white/40 w-full `}>

                <div className="h-full w-[50%] bg-primary flex items-center justify-end">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>

            </div>

            <div className="flex text-sm text-text-0/60 mt-2 justify-between">
                <span>0:56</span>
                <span>1:0:56</span>
            </div>
        </div>
    )
}

export default AudioProgress