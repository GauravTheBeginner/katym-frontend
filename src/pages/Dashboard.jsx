

import Balance from "../component/Balance"
import Footer from "../component/Footer"

import Navbar from "../component/Navbar"
import { Users } from "../component/User"


function Dashboard() {
  return (
    <div>
    <Navbar/>
        <div className="mt-8 mb-6 px-4 md:px-9 lg:px-9">
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    <Footer/>   
    </div>
  )
}

export default Dashboard