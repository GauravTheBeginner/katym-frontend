/* eslint-disable react/no-unknown-property */
import axios from "axios"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


function SendMoney() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")
  const [amount, setAmount] = useState("")
  const transfer = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASEURL}api/v1/account/transfer`, {
        to: id,
        amount
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      });

      toast.success("Transfer successfully")
      setTimeout(() => {

        navigate("/dashboard")
      }, 1000);

    } catch (error) {
      toast.error("Error transferring amount")
      console.error("Error transferring amount:", error);

    }
  }

  return (
    <div className="flex flex-col   justify-between h-screen  ">
      <Navbar />
      <div className="flex justify-center items-center   py-4 ">
        <ToastContainer />
        <div className="bg-gray-100 max-w-md w-auto  p-4 rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-3xl font-bold">Send Money</h2>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">{name[0]}</span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Amount (in Rs)
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button onClick={transfer} className="w-full h-10 justify-center rounded-md text-sm font-medium transition-colors bg-green-500 text-white ring-offset-background">
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )

}

export default SendMoney   