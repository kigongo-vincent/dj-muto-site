// import { Activity, useEffect, useRef } from "react"
// import { usePlaying } from "../../store/AudioStore"
// import { fallbackCover, type AudioI } from "../screens/home/Audio"
// import Lineicons from "@lineiconshq/react-lineicons"
// import { HeartOutlined, HeartSolid, MenuMeatballs1Solid, NextStep2Solid, PauseSolid, PlaySolid, PreviousStep2Solid } from "@lineiconshq/free-icons"
// import { useLocation, useNavigate } from "react-router"
// import TrackMenu from "./TrackMenu"


// const AudioPlay = () => {

//     const { playing, isPlaying, setIsPlaying, setPlaying } = usePlaying()
//     const audioRef = useRef<HTMLAudioElement | null>(null)

//     useEffect(() => {
//         if (playing) {
//             isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause()
//         }
//     }, [isPlaying, playing])
//     const cover = playing?.cover?.length != 0 ? playing?.cover : fallbackCover

//     const { pathname } = useLocation()

//     // const hidePlayer = ["/tabs/playing", "/", "/tabs/bio", "/auth/", "/auth/login", "/upload/video", "/upload/music", "/upload/mixtape", "/auth/email-sub"]?.includes(pathname)
//     const hidePlayer = !pathname?.includes("tabs") || pathname?.includes("playing")
//     if (playing == null) {
//         return
//     }


//     // track changes with time 
//     useEffect(() => {
//         const audio = audioRef.current;

//         const handleTimeUpdate = () => {
//             setPlaying({ ...playing, state: { ...playing?.state, time: { ...playing?.state?.time, current: audioRef?.current?.currentTime } } } as AudioI)
//         };

//         audio?.addEventListener("timeupdate", handleTimeUpdate);

//         return () => {
//             audio?.removeEventListener("timeupdate", handleTimeUpdate);
//         };
//     }, []);


//     // get the total time 
//     useEffect(() => {
//         setPlaying({ ...playing, state: { ...playing?.state, time: { ...playing?.state?.time, total: audioRef?.current?.duration } } } as AudioI)
//     }, [audioRef?.current?.duration])

//     const navigate = useNavigate()

//     return (
//         <Activity mode={playing ? "visible" : "hidden"}>
//             <div className={`fixed  bottom-[9vh] w-full p-4 z-60 ${hidePlayer && "hidden"}`}>

//                 <div className="w-full flex gap-4 justify-between bg-ground-1/40 backdrop-blur-md border border-text-0/5 p-4 rounded ">

//                     <img src={cover}
//                         onClick={() => navigate("/tabs/playing")}
//                         alt="" className="cursor-pointer bg-ground-2 rounded-full h-14 w-14 object-cover" />

//                     <div className="flex items-center gap-4">
//                         <button className="text-text-0/50">
//                             <Lineicons icon={PreviousStep2Solid} />
//                         </button>
//                         <button onClick={() => setIsPlaying(!isPlaying)}>
//                             <Lineicons icon={!isPlaying ? PlaySolid : PauseSolid} />
//                         </button>
//                         <button className="text-text-0/50">
//                             <Lineicons icon={NextStep2Solid} />
//                         </button>
//                     </div>


//                     <div className="flex items-center gap-2">
//                         <button className="" onClick={() => setPlaying({ ...playing, liked: !playing?.liked })}>
//                             <Lineicons icon={playing?.liked ? HeartSolid : HeartOutlined} />
//                         </button >
//                         <TrackMenu content={<></>} trigger={
//                             <button
//                                 className="rotate-90">
//                                 <Lineicons icon={MenuMeatballs1Solid} />
//                             </button>} />
//                     </div>

//                 </div>

//             </div>
//             <audio className="hidden" src={playing?.url} ref={audioRef} />
//         </Activity>

//     )
// }

// export default AudioPlay

import { Activity, useEffect, useRef } from "react";
import { usePlaying } from "../../store/AudioStore";
import { fallbackCover } from "../screens/home/Audio";
import Lineicons from "@lineiconshq/react-lineicons";
import {
    HeartOutlined,
    HeartSolid,
    MenuMeatballs1Solid,
    NextStep2Solid,
    PauseSolid,
    PlaySolid,
    PreviousStep2Solid,
} from "@lineiconshq/free-icons";
import { useLocation, useNavigate } from "react-router";
import TrackMenu from "./TrackMenu";

const AudioPlay = () => {
    const { playing, isPlaying, setIsPlaying, setPlaying } = usePlaying();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const hidePlayer =
        !pathname.includes("tabs") || pathname.includes("playing");

    const cover =
        playing?.cover && playing.cover.length > 0
            ? playing.cover
            : fallbackCover;

    // Play / pause audio
    useEffect(() => {
        if (!playing || !audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch(console.error);
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, playing]);

    // Track current playback time
    useEffect(() => {
        const audio = audioRef.current;

        if (!audio || !playing) return;

        const handleTimeUpdate = () => {
            const current = audio.currentTime;

            setPlaying(
                {
                    ...playing,
                    state: {
                        ...playing?.state,
                        time: {
                            total: playing?.state?.time?.total || 0,
                            current
                        },
                        volume: playing?.state?.volume || 0
                    },
                })
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [playing, setPlaying]);

    useEffect(() => {
        if (playing && audioRef?.current) {
            if (playing?.state?.volume == 0) {
                // unmute 
                audioRef.current.volume = 1
            } else {
                // mute 
                audioRef.current.volume = 0
            }
        }
    }, [playing?.state?.time])

    // Get duration when metadata loads
    useEffect(() => {
        const audio = audioRef.current;

        if (!audio || !playing) return;

        const handleLoadedMetadata = () => {
            const total = audio.duration;

            setPlaying(
                {
                    ...playing,
                    state: {
                        ...playing?.state,
                        time: {
                            total: total || 0,
                            current: playing?.state?.time?.current || 0
                        },
                        volume: playing?.state?.volume || 0
                    },
                })
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener(
                "loadedmetadata",
                handleLoadedMetadata
            );
        };
    }, [playing, setPlaying]);

    if (!playing) {
        return null;
    }

    return (
        <Activity mode="visible">
            <div
                className={`fixed bottom-[9vh] w-full p-4 z-60 ${hidePlayer ? "hidden" : ""
                    }`}
            >
                <div className="w-full flex gap-4 justify-between bg-ground-1/40 backdrop-blur-md border border-text-0/5 p-4 rounded">
                    <img
                        src={cover}
                        alt={playing.title ?? ""}
                        onClick={() => navigate("/tabs/playing")}
                        className="cursor-pointer bg-ground-2 rounded-full h-14 w-14 object-cover"
                    />

                    <div className="flex items-center gap-4">
                        <button className="text-text-0/50">
                            <Lineicons icon={PreviousStep2Solid} />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            <Lineicons
                                icon={
                                    isPlaying
                                        ? PauseSolid
                                        : PlaySolid
                                }
                            />
                        </button>

                        <button className="text-text-0/50">
                            <Lineicons icon={NextStep2Solid} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() =>
                                setPlaying({
                                    ...playing,
                                    liked: !playing.liked,
                                })
                            }
                        >
                            <Lineicons
                                icon={
                                    playing.liked
                                        ? HeartSolid
                                        : HeartOutlined
                                }
                            />
                        </button>

                        <TrackMenu
                            content={<></>}
                            trigger={
                                <button className="rotate-90">
                                    <Lineicons
                                        icon={MenuMeatballs1Solid}
                                    />
                                </button>
                            }
                        />
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={playing.url}
                className="hidden"
                preload="metadata"
            />
        </Activity>
    );
};

export default AudioPlay;