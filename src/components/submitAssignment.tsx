import axios from "axios"
import {useRouter} from 'next/router';
import { FC, useEffect, useState } from "react"

interface SubmitAssignmentProps {
    submissiontext: string
}

const SubmitAssignment:FC<SubmitAssignmentProps> = ({submissiontext}) => {
    const router = useRouter();
    useEffect(()=> {
        console.log(submissiontext)
    }, [])

    const submitAssignment = async () => {
        const formdata = new FormData()
        formdata.append("assignment_id", router.asPath.split("/")[2])
        formdata.append("submission_text", submissiontext)
        try {
            const resp = await axios.post("http://157.245.240.148:8000/submit-assignment", formdata,
            {
                headers: {
                    Authorization: `${localStorage.getItem("authToken")}`,
                },
            
            })
        } catch (error) {
            console.log("Error in fetching assignment", error)
        }
    }

    return (
        <button className="w-fit border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg"
            onClick={submitAssignment}>Submit Assignment</button>
    )
}

export default SubmitAssignment

// /submit-assignment
// {
// assignment_id
// submission_text
// submission_file (optional)
// }