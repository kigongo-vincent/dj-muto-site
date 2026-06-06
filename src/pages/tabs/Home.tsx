import { useEffect, useState } from "react"
import Search from "../../components/base/Search"
import Tabs from "../../components/base/Tabs"
import type { audioAction, AudioI } from "../../components/screens/home/Audio"
import FlexRender from "../../components/base/FlexRender"
import { usePlaying } from "../../store/AudioStore"
import type { VideoI } from "../../components/screens/home/Video"
import Video from "../../components/screens/home/Video"
import Audio from "../../components/screens/home/Audio"
import MixCover from "../../assets/controller.png"

export const audioList: AudioI[] = [
    {
        ID: 1,
        title: "SoundHelix",
        caption: "Relaxing",
        isNew: true,
        liked: false,
        cover: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },

    {
        ID: 4,
        title: "SoundHelix Track 3",
        caption: "Released 2019",
        isNew: false,
        liked: false,
        cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
];

const Home = () => {

    const [tabs] = useState<string[]>(["mixtapes", "music", "videos"])
    const [activeTab, setActiveTab] = useState("mixtapes")



    const [videos, setVideos] = useState<VideoI[]>([
        {
            ID: 2,
            title: "How SpaceX Lands Rockets",
            caption: "good vibes",
            isNew: false,
            liked: true,
            url: "https://www.youtube.com/watch?v=bvim4rsNHkQ",
            cover: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7"
        },
        {
            ID: 3,
            title: "The Secrets",
            caption: "poison again",
            isNew: true,
            liked: false,
            url: "https://www.youtube.com/watch?v=YH3c1QZzRK4",
            cover: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
        },

        {
            ID: 10,
            title: "Wildlife Docu",
            caption: "JINJA campus vibes",
            isNew: true,
            liked: false,
            url: "https://www.youtube.com/watch?v=JkaxUblCGz0",
            cover: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
        }
    ])

    const [audios, setAudios] = useState<AudioI[]>([]);
    const { setPlaying, setIsPlaying } = usePlaying()

    const [mixtapes, setMixtapes] = useState<AudioI[]>([])

    useEffect(() => {
        setAudios(audioList)
        setMixtapes(audioList.slice(1, 4)?.map(a => ({ ...a, cover: MixCover })))
    }, [])

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
    }

    return (
        <div className=" flex flex-col gap-4 ">
            <Search placeholder="search for mixtapes by muto pro" />
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                activeTab == "music"
                    ?
                    <FlexRender items={audios} render={(item, index) => <Audio key={index} {...item} action={(id, a) => ActionResolver("audio", id, a)} />} />
                    :
                    activeTab == "mixtapes"
                        ?
                        <FlexRender items={mixtapes} render={(item, index) => <Audio key={index} {...item} action={(id, a) => ActionResolver("mix", id, a)} />} />
                        :
                        <FlexRender items={videos} render={(item, index) => <Video action={(id, a) => ActionResolver("video", id, a)} key={index} {...item} />} />
            }

        </div>
    )
}

export default Home