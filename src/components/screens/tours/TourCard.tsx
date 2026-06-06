

export interface TourI {
    cover: string
    title: string
    location: string
    time: string
}

const TourCard = (t: TourI) => {
    return (
        <div className="h-[60vh]  shadow-primary  w-full shrink-0 snap-start relative overflow-hidden  min-w-[80vw] scroll-smooth  rounded-xl">

            <img src={t?.cover} alt="" className="absolute rounded overflow-hidden h-full w-full object-cover left-0 to-0% bg-ground-1" />

            {/* overlay  */}
            <div className="from-black gap-1 from-15% to-ground-2/20 bg-gradient-to-t flex flex-col justify-end p-6 absolute left-0 top- h-full w-full">
                <p className="text-2xl font-semibold">{t?.title}</p>
                <p className="text-text-0/60 font-medium">{t?.location}</p>
                <p className="text-sm text-text-0/40">{t?.time}</p>
            </div>

        </div>
    )
}

export default TourCard