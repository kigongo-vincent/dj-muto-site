import { useState } from "react"
import Search from "../../components/base/Search"
import type { TourI } from "../../components/screens/tours/TourCard"
import FlexRender from "../../components/base/FlexRender"
import TourCard from "../../components/screens/tours/TourCard"


const Tours = () => {

    const [tours] = useState<TourI[]>([
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPUA-QOXyCBX_By5pJLxSRVo1lFhLp22nxw&s",
            title: "Norwegian Fjords Adventure",
            location: "Bergen, Norway",
            time: "7 Days"
        },
        {
            cover: "https://egotickets-core-cdn.s3.eu-north-1.amazonaws.com/production/uploads/event/banner_photo/59218/mobile_f171d9694dcae53b.jpg",
            title: "Santorini Sunset Escape",
            location: "Santorini, Greece",
            time: "4 Days"
        },
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQH5dZig09CSzDsUSjZpwT-4Oh-c5lBp3NQ&s",
            title: "Swiss Alps Panorama",
            location: "Interlaken, Switzerland",
            time: "5 Days"
        },
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_HT7hlxYyhrereq3CI2f7R1xUlNLd-SU4Q&s",
            title: "Serengeti Wildlife Safari",
            location: "Serengeti, Tanzania",
            time: "6 Days"
        },
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq97lFR5E_qmxetamwrVI3_AglCE2q7Yh2iw&s",
            title: "Dubai Luxury Experience",
            location: "Dubai, UAE",
            time: "3 Days"
        },
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GHF7LJtE4yxa22QLTiS8PrYI1gZja5RbXg&s",
            title: "Canadian Rockies Expedition",
            location: "Banff, Canada",
            time: "8 Days"
        },

    ])

    return (
        <div>
            <Search placeholder="search for places where dj muto is playing" />
            <FlexRender className="overflow-x-auto flex flex-row mt-4 snap-x snap-mandatory" items={tours} render={(item, index) => <TourCard key={index} {...item} />} />
        </div>
    )
}

export default Tours