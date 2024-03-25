

import Balance from "../component/Balance"
import Navbar from "../component/Navbar"
import { Users } from "../component/User"


function Dashboard() {
  return (
    <div>
    <Navbar/>
        <div className="mt-8 px-9">
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    </div>
  )
}

export default Dashboard