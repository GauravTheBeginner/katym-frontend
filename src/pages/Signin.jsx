import { useState } from "react"
import { BottomWarning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import Heading from "../component/Heading"
import { InputBox } from "../component/InputBox"
import SubHeading from "../component/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASEURL}api/v1/user/Signin`, {
        username, password
      })
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("name", username)
      toast.success("Login successfully")
      setPassword("")
      setUsername("")

      setTimeout(() => {

        navigate("/dashboard")
      }, 1000);
    } catch (error) {
      toast.error("Error signing in")
      console.log("cant find user")
    }

  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <ToastContainer />
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="gaurav@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button onClick={login} label={"Sign in"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin