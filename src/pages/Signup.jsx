import { useState } from "react"
import { BottomWarning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import Heading from "../component/Heading"
import { InputBox } from "../component/InputBox"
import SubHeading from "../component/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup  () {
    const [firstName,serFirstName] = useState("")
    const [lastName,setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [password,setPassword]  =  useState("")
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
          const response = await axios.post("http://localhost:3000/api/v1/user/Signup", {
            username,
            password,
            firstName,
            lastName,
          });
          console.log(response.data.token);
          localStorage.setItem("token",response.data.token)
          navigate("/dashboard")
        } catch (error) {
          console.error("Error signing up:", error);
         
        }
      };
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={ e => {serFirstName(e.target.value)}} placeholder="John" label={"First Name"} />
        <InputBox  onChange={ e => {setLastName(e.target.value)}} placeholder="Doe" label={"Last Name"} />
        <InputBox  onChange={ e => {setUserName(e.target.value)}} placeholder="gaurav@gmail.com" label={"Email"} />
        <InputBox  onChange={ e => {setPassword(e.target.value)}} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={handleSubmit} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}

export default Signup