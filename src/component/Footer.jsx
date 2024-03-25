import { Link } from "react-router-dom"


function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">
     &copy; 2021 Kaytm. All rights reserved.Built with ❤️ by Gaurav
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" to={"https://github.com/GauravTheBeginner/katym-frontend"}  target="_blank">
           Github
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" to={"https://twitter.com/gauravbobal546"} target="_blank">
            Twitter
        </Link>
    </nav>
</footer>
  )
}

export default Footer