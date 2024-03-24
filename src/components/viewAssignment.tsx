import axios from "axios";
import { FC, useEffect } from "react";
import { usePathname } from 'next/navigation'

const ViewAssignment = () => {

    const pathname = usePathname()

    useEffect(() => {
        (async () => {
            const formdata = new FormData()
            formdata.append("assignment_id", pathname.split("/")[2])
            try {
                const resp = await axios.post("http://157.245.240.148:8000/assignment-by-id", formdata,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem("authToken")}`,
                        },
                    })
            } catch (error) {
                console.log("Error in fetching assignment", error)
            }
        })()
    }, [pathname])
    return (
        <button className="w-fit border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg">View Assignment</button>
    )
}

export default ViewAssignment;