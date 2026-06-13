


const Login = () => {
    return (
        <div className="flex flex-col p-8 py-14  h-screen w-full items-center justify-between">

            <div className="font-bold ">DJ MUTO PRO</div>

            <div className="flex flex-col  w-full gap-4">

                <div className="text-3xl font-semibold">Login</div>
                <p className="max-w-[80%] text-text-0/50 mb-8 text-lg">Ensure you have credentials to access the portal</p>

                <div className="flex flex-col gap-2">
                    <div className="h-14 w-full px-4 pl-5 py-1 rounded flex items-center bg-ground-1 ">
                        <input type="text" className="outline-0 flex-1" placeholder="email" />
                    </div>
                </div>

                <div className="h-14 w-full px-2  py-1 pl-5 rounded gap-2 flex items-center bg-ground-1 ">
                    <input type="password" className="outline-0 flex-1" placeholder="************" />
                    <button className="bg-ground-2 rounded-lg px-4 py-2 flex items-center gap-1 text-sm">
                        <span>show</span>
                    </button>
                </div>

                <button className="bg-primary h-14 rounded ">
                    Login
                </button>

            </div>

            <div className="text-text-0/60 text-sm">all rights reserved {new Date()?.getFullYear()} </div>

        </div>
    )
}

export default Login