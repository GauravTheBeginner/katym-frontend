import { useState } from "react";

import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../component/Footer";

function Update() {
    const [firstName, serFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleUpdate = async () => {
        try {
             await axios.put(`${import.meta.env.VITE_BASEURL}api/v1/user/update`, {
                password,
                firstName,
                lastName,
            },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
           
           toast.success("Update successfully")
           setPassword("")
              setLastName("")
                serFirstName("")

           setTimeout(() => {
            
               navigate("/dashboard")
           }, 1000);
        } catch (error) {
            toast.error("Error updating profile")
            console.error("Error signing up:", error);

        }
    };
    return (
        <div className="flex flex-col   justify-between h-screen">
            <Navbar />
            <div className="mx-auto max-w-xl w-auto px-8 py-10   space-y-4">
                <ToastContainer/>
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Update Your Profile</h1>
                </div>
                <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                    <input
                        onChange={(e) => serFirstName(e.target.value)}
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Lee"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Robinson"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                    <input
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        required
                    />
                </div>
                <button
                onClick={handleUpdate}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-black text-white h-10 px-4 py-2 w-full"
                    type="submit"
                >
                    Update
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Update;
