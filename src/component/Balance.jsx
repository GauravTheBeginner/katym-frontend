/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import axios from "axios"

export default function Balance() {
    const [value, setValue] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASEURL}api/v1/account/balance`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });

            setValue(response.data.balance);
        };
        fetchData();
    }, []);

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}
