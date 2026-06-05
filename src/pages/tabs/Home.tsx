import { useState } from "react"
import Search from "../../components/base/Search"
import Tabs from "../../components/base/Tabs"
import type { audioAction, AudioI } from "../../components/screens/home/Audio"
import FlexRender from "../../components/base/FlexRender"
import Audio from "../../components/screens/home/Audio"
import { usePlaying } from "../../store/AudioStore"


const Home = () => {

    const [tabs] = useState<string[]>(["all", "mixtapes", "music", "videos"])
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

    const [audios, setAudios] = useState<AudioI[]>(audioList);
    const { setPlaying, setIsPlaying } = usePlaying()

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

    const ActionResolver = (ID: number, a: audioAction) => {
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

    return (
        <div className=" flex flex-col gap-4 ">
            <Search placeholder="search for mixtapes by muto pro" />
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <FlexRender items={audios} render={(item, index) => <Audio action={ActionResolver} key={index} {...item} />} />
        </div>
    )
}

export default Home