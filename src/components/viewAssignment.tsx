import axios from "axios";
import { FC, useEffect, useState } from "react";
import {useRouter} from 'next/router';
import { recentAssignments } from "@/types/types";
import { RxCrossCircled } from "react-icons/rx";

import Modal from 'react-modal';

const ViewAssignment = () => {

    const router = useRouter();

    const [assignment, setAssignment] = useState<recentAssignments>({} as recentAssignments)
    const [view, setView] = useState<boolean>(false)

    const viewAssignment = async () => {
        setView(true)
        const formdata = new FormData()
        formdata.append("assignment_id", router.asPath.split("/")[2])
        console.log("Assignment ID", router.asPath)
        try {
            const resp = await axios.post("http://157.245.240.148:8000/assignment-by-id", formdata,
                {
                    headers: {
                        Authorization: `${localStorage.getItem("authToken")}`,
                    },
                })
            setAssignment(resp.data)
        } catch (error) {
            console.log("Error in fetching assignment", error)
        }

    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            width: '40rem',
            height: '20rem'
        },
    };

    return (
        <div>
            <button className="w-fit border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg"
                onClick={viewAssignment}>View Assignment</button>

            <Modal
                style={customStyles}
                isOpen={view}>
                <div className="w-full h-full">
                    <div className="relative w-full h-full flex flex-col items-start px-8">
                        <RxCrossCircled color="red" className="w-6 h-6 absolute right-2 top-2 cursor-pointer" onClick={() => {setView(false)}}/>
                        
                        <div className="text-primary flex flex-col items-start gap-y-1">
                            <span className="font-bold text-xl">Title</span>
                            <span className="text-orange-600">{assignment.title}</span>
                        </div>
                        <div className="text-primary flex flex-col items-start gap-y-1">
                            <span className="font-bold text-xl">Description:</span>
                            <span className="text-orange-600">{assignment.description}</span>
                        </div>
                        <div className="text-primary flex flex-col items-start gap-y-1">
                            <span className="font-bold text-xl">AI Limits:</span>
                            <span className="text-orange-600">{assignment.ai_limitation ? assignment.ai_limitation : "None"}</span>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default ViewAssignment;