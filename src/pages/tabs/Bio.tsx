import BG1 from "../../assets/muto.jpg"

const Bio = () => {
    return (
        <div className="h-screen w-screen relative">

            {/* image */}
            <img src={BG1} className="absolute mix-blend-luminosity h-full w-full object-cover left-0 to-0" alt="" />

            {/* overlay */}

            <div className="absolute left-0 flex flex-col justify-between px-10 py-20 top-0 w-full bg-gradient-to-t  from-black to-ground-0/70 h-full">
                <div></div>
                <div>
                    <p className="text-center w-full text-6xl  font-fancy">DJ Muto Pro</p>
                    <div className="bg-white/10 w-full p-6 my-8 rounded-lg text-text-0/90">
                        DJ Muto Pro UG is a fast-rising Ugandan DJ and entertainer known for delivering electrifying mixes, energetic live sets, and nonstop party vibes. With a deep passion for music and crowd engagement, DJ Muto Pro UG blends Afrobeat, Amapiano, Dancehall, Hip Hop, and Ugandan hits into unforgettable performances that keep audiences dancing from start to finish.
                        Driven by creativity and consistency,
                    </div>
                    <button className="flex w-full bg-black px-5 py-4 rounded-full border-text-0/15 items-center justify-center gap-2 border">
                        <img src="https://freepnglogo.com/images/all_img/tik-tok-logo-png-80f7.png" className="h-6 w-6 object-contain" alt="" />
                        follow on tiktok</button>
                </div>
                <div></div>

            </div>

        </div>
    )
}

export default Bio