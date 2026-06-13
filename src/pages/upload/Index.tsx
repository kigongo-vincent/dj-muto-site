import { useMemo, useState } from "react"
import Controller from "../../assets/controller.png"
import Speaker from "../../assets/speaker.webp"
import Lineicons from "@lineiconshq/react-lineicons"
import { CameraMovie1Solid, CheckCircle1Solid, FilePencilSolid, GallerySolid, MusicSolid, PlaySolid } from "@lineiconshq/free-icons"
import { useParams } from "react-router"


const Index = () => {

    const steps = ["type", "file", "meta-data", "final"]
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [uploadStatus] = useState(201)
    const [currentStep, setCurrentStep] = useState(steps[currentStepIndex])
    const { t } = useParams()
    const newStepIndex = useMemo(() => currentStepIndex == steps.length - 1 ? 0 : currentStepIndex + 1, [currentStep])
    const prevStepIndex = useMemo(() => currentStepIndex == 0 ? 0 : currentStepIndex - 1, [currentStep])

    const handlePrev = () => {
        setCurrentStepIndex(prevStepIndex)
        setCurrentStep(() => steps[prevStepIndex])
    }

    const handleNext = () => {
        setCurrentStepIndex(newStepIndex)
        setCurrentStep(steps[newStepIndex])
    }

    const handlePreview = () => {
        alert("hey")
    }

    if (currentStep === "type") {
        return (
            <div className="flex flex-col p-8  items-center justify-between h-screen">
                <div />

                <div className="flex w-full gap-4 flex-wrap">
                    <div onClick={handleNext} className="bg-ground-1 overflow-hidden  relative h-[14vh] cursor-pointer items-center justify-center min-w-full flex rounded-lg flex-1">

                        <img src={Speaker} className="h-full w-full absolute object-cover object-top-[90%]" />
                        <p className="text-2xl absolute bg-black/50 h-full w-full flex items-center justify-center font-semibold">TOURS & EVENTS</p>
                    </div>
                    <div onClick={handleNext} className="bg-ground-1 h-[14vh] cursor-pointer items-center justify-center  flex rounded-lg flex-1">
                        <div className="bg-danger">
                            <div className="bg-red-600 cursor-pointer px-6 rounded-xl py-2">
                                <Lineicons icon={PlaySolid} />
                            </div>
                        </div>
                    </div>

                    <div onClick={handleNext} className="bg-ground-1 h-[14vh] cursor-pointer items-center justify-center  flex rounded-lg flex-1">
                        <img src={Speaker} className="h-24" />
                    </div>
                    <div onClick={handleNext} className="bg-ground-1 h-[14vh] cursor-pointer items-center justify-center min-w-full flex rounded-lg flex-1">
                        <img src={Controller} className="h-24" />
                    </div>



                </div>

                <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
            </div>
        )

    }



    if (currentStep === "file") {
        if (t == "video") {
            return (
                <div className="flex flex-col p-8  items-center justify-between h-screen">
                    <div />

                    <div className="flex w-full gap-10 flex-wrap">

                        <div className="flex flex-col gap-3">
                            <div className="flex items-end gap-3">
                                <p className="text-2xl font-semibold">Video upload</p>
                                <a href="" className="flex gap-1 items-center text-sm text-primary underline"><Lineicons size={14} icon={CameraMovie1Solid} /> tutorial</a>
                            </div>
                            <p className=" text-text-0/60 flex items-center flex-wrap">
                                Go to the video (youtube video) you'd like to link to your site, click the share option (with the share icon) and select the copy link option, from there come and paste the link in the input below,
                            </p>
                        </div>

                        <div className="h-14 w-full px-2 pl-8 py-1 rounded-full flex items-center bg-ground-1 ">
                            <input type="text" className="outline-0 flex-1" placeholder="https://you.tu.be/jjvnnkjdvndjv" />
                            <button className="bg-ground-2 rounded-full px-4 py-2 flex items-center gap-1 text-sm">
                                <Lineicons icon={FilePencilSolid} size={13} />
                                <span>paste</span>
                            </button>
                        </div>

                        <button className="bg-primary w-full py-2 rounded-full h-12" onClick={handleNext}>proceed</button>

                    </div>

                    <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
                </div>
            )
        }
        else if (t == "music" || t == "mixtape") {
            return (
                <div className="flex flex-col p-8  items-center justify-between h-screen">
                    <div />

                    <div className="flex w-full gap-10 flex-wrap">

                        <div className="bg-ground-1  border-dashed w-full flex flex-col justify-center items-center gap-2 rounded-xl h-[30vh]">
                            <div className="bg-ground-1 flex flex-col gap-2">
                                <img src={t == "music" ? Speaker : Controller} className="h-24" />
                            </div>
                            <p className="text-xl mt-4 font-semibold">{t} upload
                            </p>
                            <p className="text-text-0/40 text-sm text-center max-w-[70%]">Select the actual file of the {t} track</p>
                            <button className="px-6 py-2 rounded-full flex items-center gap-1 bg-primary/10 text-primary mt-2">
                                <Lineicons icon={MusicSolid} size={16} />
                                select track</button>
                        </div>
                    </div>

                    <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
                </div>
            )
        }

    }

    if (currentStep === "meta-data") {
        if (t == "video" || t == "music" || t == "mixatape") {
            return (
                <div className="flex flex-col p-8  items-center justify-between h-screen">
                    <div />

                    <div className="flex w-full flex-col gap-6 ">

                        {/* cover upload  */}

                        <div className="bg-ground-1  border-dashed w-full flex flex-col justify-center items-center gap-2 rounded-xl h-[30vh]">
                            <div className="bg-ground-1 flex flex-col gap-2">
                                <Lineicons className="text-primary" icon={GallerySolid} size={60} />
                            </div>
                            <p className="text-xl mt-4 font-semibold">Cover Image</p>
                            <p className="text-text-0/40 text-sm text-center max-w-[70%]">Select the image that is to be used as the cover for the {t}</p>
                            <button className="px-6 py-2 rounded-full bg-primary/10 text-primary mt-2">select image</button>
                        </div>

                        {/* title  */}
                        <div className="flex flex-col gap-1">
                            <p>Title</p>
                            <div className="h-14 w-full px-2 pl-6 py-1 rounded flex items-center bg-ground-1 ">
                                <input type="text" className="outline-0 flex-1" placeholder="https://you.tu.be/jjvnnkjdvndjv" />
                            </div>
                        </div>

                        <div className="flex gap-2 w-full">
                            <button onClick={handlePrev} className="bg-ground-2 w-full py-2 rounded-full h-12">cancel</button>
                            <button onClick={handleNext} className="bg-primary w-full py-2 rounded-full h-12">proceed</button>
                        </div>

                    </div>

                    <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
                </div>
            )
        }
        else if (t == "events") {
            return (
                <div className="flex flex-col p-8  items-center justify-between h-screen">
                    <div />

                    <div className="flex w-full flex-col gap-6 ">

                        {/* cover upload  */}

                        <div className="bg-ground-1  border-dashed w-full flex flex-col justify-center items-center gap-2 rounded-xl h-[30vh]">
                            <div className="bg-ground-1 flex flex-col gap-2">
                                <Lineicons className="text-primary" icon={GallerySolid} size={60} />
                            </div>
                            <p className="text-xl mt-4 font-semibold">Cover Image</p>
                            <p className="text-text-0/40 text-sm text-center max-w-[70%]">Select the image that is to be used as the cover for the {t}</p>
                            <button className="px-6 py-2 rounded-full bg-primary/10 text-primary mt-2">select image</button>
                        </div>

                        {/* title  */}
                        <div className="flex flex-col gap-1">
                            <p>Title</p>
                            <div className="h-14 w-full px-2 pl-6 py-1 rounded flex items-center bg-ground-1 ">
                                <input type="text" className="outline-0 flex-1" placeholder="https://you.tu.be/jjvnnkjdvndjv" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>Location</p>
                            <div className="h-14 w-full px-2 pl-6 py-1 rounded flex items-center bg-ground-1 ">
                                <input type="text" className="outline-0 flex-1" placeholder="kampala, Uganda" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>Date</p>
                            <div className="h-14 w-full px-2 pl-6 py-1 rounded flex items-center bg-ground-1 ">
                                <input type="date" className="outline-0 flex-1 " placeholder="https://you.tu.be/jjvnnkjdvndjv" />
                            </div>
                        </div>

                        <div className="flex gap-2 w-full">
                            <button onClick={handlePrev} className="bg-ground-2 w-full py-2 rounded-full h-12">cancel</button>
                            <button onClick={handleNext} className="bg-primary w-full py-2 rounded-full h-12">proceed</button>
                        </div>

                    </div>

                    <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
                </div>
            )
        }
    }

    if (currentStep === "final") {
        if (uploadStatus == 201) {
            return (
                <div className="flex flex-col p-8  items-center justify-between h-screen">
                    <div />

                    <div className="flex w-full flex-col gap-6 ">

                        <div className="bg-green-900/1 border border-green-800/30 border-dashed w-full flex flex-col justify-center items-center gap-2 rounded-xl h-[30vh]">
                            <div className=" flex flex-col gap-2">
                                <Lineicons className="text-green-400" icon={CheckCircle1Solid} size={60} />
                            </div>
                            <p className="text-xl mt-4 font-semibold text-green-400">Upload successful</p>
                            <p className="text-text-0/40 text-sm text-center max-w-[70%]">your video has been linked successfully</p>
                            <button onClick={handlePreview} className="bg-green-900/10 mt-4  w-[95%] justify-center px-8 py-3 rounded-full flex items-center gap-2  h-14"><Lineicons icon={CameraMovie1Solid} /> preview</button>
                        </div>

                    </div>

                    <div className="text-sm text-text-0/50">all rights reserved &copy; {new Date()?.getFullYear()}</div>
                </div>
            )
        }

    }


    return (
        <div>Index</div>
    )
}

export default Index