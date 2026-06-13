import Lineicons from "@lineiconshq/react-lineicons"
import { usePlaying } from "../../store/AudioStore"
import { MenuHamburger1Solid, NextStep2Solid, PauseSolid, PlaySolid, PreviousStep2Solid, SparkOutlined } from "@lineiconshq/free-icons"
import { Activity, useState } from "react"
import AudioProgress from "../../components/screens/playing/AudioProgress"
import Modal from "../../components/base/Modal"
import FlexRender from "../../components/base/FlexRender"
import Audio, { type audioAction, type AudioI } from "../../components/screens/home/Audio"
import { AnimatePresence, motion } from "framer-motion"


const Playing = () => {

    const [open, setOpen] = useState(false)
    const { playing, isPlaying, setIsPlaying, menu, setPlaying, setMenu } = usePlaying()


    const [audios, setAudios] = useState<AudioI[]>(menu)

    if (!playing) {
        return <div className="flex flex-col flex-1 justify-center items-center h-screen">No music currently playing</div>
    }

    const Play = (ID: number) => {
        const audio = audios?.find(a => a?.ID == ID)
        if (!audio) return
        setPlaying(audio)
        setIsPlaying(true)

    }

    const Like = (ID: number) => {
        setAudios(prev => prev?.map((a) => a?.ID == ID ? ({ ...a, liked: !a?.liked }) : a))
        return
    }

    const More = (ID: number) => {
        alert(ID)
        return
    }

    type MediaType = "video" | "audio" | "mix"

    const ActionResolver = (mediaType: MediaType = "audio", ID: number, a: audioAction) => {
        try {
            if (mediaType == "audio") {
                switch (a) {
                    case "like":
                        Like(ID)
                        break;
                    case "more":
                        More(ID)
                        break;
                    default:
                        Play(ID)
                        break;
                }
            }
        } catch (error) {

        } finally {
            setMenu(menu)
        }

    }

    return (
        <div

            className=" rounded-4xl  relative h-screen">

            {/* cover  */}
            <img src={playing?.cover} className="absolute h-full w-full object-cover" alt="" />

            {/* overlay  */}
            <div className="bg-gradient-to-t pt-[12vh] px-10 from-ground-0 to-ground-0/90 absolute h-full w-full ">

                {/* header  */}
                <div className="flex justify-end">
                    <div onClick={() => setOpen(true)} className="bg-white/10 cursor-pointer rounded-full h-16 flex items-center justify-center w-16">
                        <Lineicons icon={MenuHamburger1Solid} />
                    </div>
                </div>

                {/* player  */}
                <div className=" mt-[40vh]">

                    {/* details  */}
                    <div>
                        <div
                            className=" gap-4 flex cursor-pointer items-center rounded-xl">

                            <AnimatePresence>
                                <motion.img
                                    initial={{ y: "200%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    exit={{ y: "0%", opacity: 0 }}
                                    src={playing?.cover}
                                    onClick={() => playing?.action?.(playing?.ID, "play")}
                                    alt="" className="bg-ground-2 rounded-full h-14 w-14 object-cover" />

                            </AnimatePresence>
                            <div
                                onClick={() => playing?.action?.(playing?.ID, "play")}
                                className="flex-1 flex flex-col gap-2">
                                <motion.div
                                    initial={{ y: "-100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    exit={{ y: "0%", opacity: 0 }}
                                    className="flex items-center gap-2">
                                    <p className="font-medium">{playing?.title}</p>
                                    <Activity mode={playing?.isNew ? "visible" : "hidden"}>
                                        <span className="bg-[#D3AA24]/10 text-[#D3AA24] flex items-center gap-1 text-sm  px-4 py-1 rounded-full">
                                            <Lineicons icon={SparkOutlined} size={14} />

                                            brand new</span>
                                    </Activity>
                                </motion.div>
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
                        <button onClick={() => setIsPlaying(!isPlaying)} className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                            {/* <Lineicons icon={PlaySolid} size={40} /> */}
                            <Lineicons size={40} icon={!isPlaying ? PlaySolid : PauseSolid} />

                        </button>
                        <button className="text-text-0/50">
                            <Lineicons icon={NextStep2Solid} />
                        </button>
                    </div>

                </div>

            </div>


            {/* music list  */}
            <Modal open={open} className="bg-ground-0 max-w-[80vw]" onClose={() => setOpen(false)} position="right">
                <FlexRender className="" items={audios} render={(item, index) => <Audio key={index}  {...item} action={(id, a) => ActionResolver("audio", id, a)} />} />
            </Modal>



        </div>
    )
}

export default Playing