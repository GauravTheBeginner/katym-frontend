
import { Link } from "react-router-dom"
import Footer from "./Footer"

export default function Component() {

    const token = localStorage.getItem("token")
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex border-b-2 items-center">
                <div className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    <span className="font-semibold text-xl ml-2">KaTyM  App</span>
                </div>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    {!token ? <Link className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors bg-black text-white " to={"/signup"}>
                        Sign Up
                    </Link> : <Link className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors bg-black text-white " to={"/dashboard"}>
                        Dashboard
                    </Link>}
                </nav>
            </header>
            <main className="flex-1 ">
                <section className="w-full py-6 sm:py-12 md:py-20 lg:py-20 xl:py-20 flex justify-center items-center ">
                    <div className="container px-4 md:px-6 flex flex-col sm:py-12  py-20 items-center justify-center space-y-6 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Send money with ease</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                The Kaytm app makes it simple to send money to friends and family. No more waiting in line. No more
                                hassle.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {!token ? <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium  shadow transition-colors text-black"
                                to={"/signup"}
                            >
                                Sign Up
                            </Link> : <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium  shadow transition-colors text-black"
                                to={"/dashboard"}
                            >
                                Dashboard
                            </Link>}
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border bg-black text-white px-8"
                                to={"https://github.com/GauravTheBeginner/katym-frontend"} target="_blank"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}
