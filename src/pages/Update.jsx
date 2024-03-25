import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
           
           
            navigate("/dashboard")
        } catch (error) {
            console.error("Error signing up:", error);

        }
    };
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-sm py-10 space-y-4">

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Update Your Profile</h1>
                </div>
                <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                    <input
                        onChange={(e) => serFirstName(e.target.value)}
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Lee"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Robinson"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                    <input
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        required
                    />
                </div>
                <button
                onClick={handleUpdate}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-black text-white h-10 px-4 py-2 w-full"
                    type="submit"
                >
                    Update
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Update;
