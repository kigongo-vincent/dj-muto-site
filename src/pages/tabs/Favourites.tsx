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


const Favourites = () => {

    const [tabs] = useState<string[]>(["mixtapes", "music", "videos"])
    const [activeTab, setActiveTab] = useState("mixtapes")

    const audioList: AudioI[] = [
        {
            ID: 1,
            title: "SoundHelix Track 1",
            caption: "Relaxing instrumental demo track",
            isNew: true,
            liked: false,
            cover: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
            ID: 2,
            title: "SoundHelix Track 2",
            caption: "Acoustic background music",
            isNew: true,
            liked: true,
            cover: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        },
        {
            ID: 3,
            title: "SoundHelix Track 3",
            caption: "Smooth ambient sound",
            isNew: false,
            liked: false,
            cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
        {
            ID: 4,
            title: "SoundHelix Track 3",
            caption: "Smooth ambient sound",
            isNew: false,
            liked: false,
            cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
        {
            ID: 4,
            title: "SoundHelix Track 4",
            caption: "Chill electronic vibes",
            isNew: false,
            liked: true,
            cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        },
        {
            ID: 5,
            title: "SoundHelix Track 5",
            caption: "Light piano melody",
            isNew: true,
            liked: false,
            cover: "https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        },
    ];


    const [videos] = useState<VideoI[]>([
        {
            ID: 2,
            title: "How SpaceX Lands Rockets",
            caption: "An in-depth look at reusable rocket technology.",
            isNew: false,
            liked: true,
            url: "https://www.youtube.com/watch?v=bvim4rsNHkQ",
            cover: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7"
        },
        {
            ID: 3,
            title: "The Secrets of the Ocean",
            caption: "Discover fascinating creatures living in the deep sea.",
            isNew: true,
            liked: false,
            url: "https://www.youtube.com/watch?v=YH3c1QZzRK4",
            cover: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
        },
        {
            ID: 4,
            title: "JavaScript in 100 Seconds",
            caption: "A quick and engaging overview of JavaScript.",
            isNew: false,
            liked: true,
            url: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
            cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        },
        {
            ID: 5,
            title: "Amazing Drone Views of Norway",
            caption: "Breathtaking aerial footage of Norwegian fjords.",
            isNew: true,
            liked: false,
            url: "https://www.youtube.com/watch?v=fVQ6gJ7LJtQ",
            cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            ID: 6,
            title: "Building a Modern React App",
            caption: "From setup to deployment using React and TypeScript.",
            isNew: false,
            liked: false,
            url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            cover: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
        },
        {
            ID: 7,
            title: "Street Food Around the World",
            caption: "A delicious journey through iconic street foods.",
            isNew: true,
            liked: true,
            url: "https://www.youtube.com/watch?v=J4oA3S4Xf9Q",
            cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
            ID: 8,
            title: "The Future of Artificial Intelligence",
            caption: "Experts discuss upcoming AI breakthroughs.",
            isNew: false,
            liked: false,
            url: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
            cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        },
        {
            ID: 9,
            title: "Relaxing Piano Music",
            caption: "Perfect background music for work or study.",
            isNew: false,
            liked: true,
            url: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
            cover: "https://images.unsplash.com/photo-1514119412350-e174d90d280e"
        },
        {
            ID: 10,
            title: "Wildlife Documentary: Africa",
            caption: "Experience the beauty of African wildlife.",
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
        setMixtapes(audioList.slice(1, 2)?.map(a => ({ ...a, cover: MixCover })))
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

export default Favourites