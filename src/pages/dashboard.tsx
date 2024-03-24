import NavbarDashboard from "@/components/navbar/navbarDashboard"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getAllAssignments } from "./api/AssignmentsAPI";
import { recentAssignments } from "@/types/types";



const Dashboard = () => {

    const [userType, setUserType] = useState<string>("")
    const [recentAssignments, setRecentAssignments] = useState<recentAssignments[]>([] as recentAssignments[])
    const [showAssignments, setShowAssignments] = useState<recentAssignments[]>([] as recentAssignments[])
    const [assignmentListType, setAssignmentListType] = useState<string>("all")
    useEffect(() => {
        const userInfoString = localStorage.getItem('userInfo');

        if (!userInfoString) {
            window.location.href = "/login";
        }
        if (userInfoString) {
            setUserType(JSON.parse(userInfoString).userData.type);
        }
    }, [])

    useEffect(() => {
        if (userType === "professor" || userType === "student") {
            (async () => {
                const data: recentAssignments[] = await getAllAssignments(userType)
                console.log(data)
                if (data) {
                    setRecentAssignments(data)
                    setShowAssignments(data)
                    console.log(data)
                }
            })()
        }
    }, [userType])

    useEffect(() => {
        if (assignmentListType === "all") {
            setShowAssignments(recentAssignments)
        }
        else if (assignmentListType === "active") {
            setShowAssignments(recentAssignments.filter(assignment => assignment.active))
        }
        else {
            setShowAssignments(recentAssignments.filter(assignment => !assignment.active))
        }
    }, [assignmentListType])

    return (
        <div className="w-screen">
            <NavbarDashboard />
            <div className="py-10 flex flex-col gap-y-6 mx-20">
                {
                    userType === "professor" ?
                        <Link href={"/add-assignment"}>
                            <div className=" bg-primary py-2 px-4 rounded-xl w-fit cursor-pointer"
                            >
                                Start an assignment
                            </div>
                        </Link>
                        :
                        <Link href={"/join-assignment"}>
                            <div className=" bg-primary py-2 px-4 rounded-xl w-fit cursor-pointer">
                                Join an assignment
                            </div>
                        </Link>
                }
            </div>
            <div className="mx-20 flex flex-col gap-y-4">
                <span className="text-secondary-600 font-medium text-xl">Recent Assignments</span>
                <div className="relative flex flex-row w-80 h-8 border-2 border-secondary-400 rounded-xl text-primary overflow-hidden">
                    <div className="z-10 w-1/3 flex items-center justify-center cursor-pointer border"
                        onClick={() => { setAssignmentListType("all") }}>
                        <span>All</span>
                    </div>
                    <div className="z-10 w-1/3 flex items-center justify-center cursor-pointer border border-x-secondary-200"
                        onClick={() => { setAssignmentListType("active") }}>
                        <span>Active</span>
                    </div>
                    <div className="z-10 w-1/3 flex items-center justify-center cursor-pointer"
                        onClick={() => { setAssignmentListType("inactive") }}>
                        <span> {userType === "student" ? "Submitted" : "Ended"}</span>
                    </div>
                    <div className={`transform duration-100 ease-in absolute w-1/3 top-0 h-12 bg-secondary-200
                             ${assignmentListType === "all" ? "left-0" : assignmentListType === "active" ? "left-1/3" : "left-2/3"}`}></div>
                </div>

                <div className="flex flex-row items-center gap-x-2 mb-6">
                    <div className="w-4 h-4 rounded-sm bg-secondary-200"></div>
                    <span className="text-orange-700">Active</span>
                    <div className="ml-4 w-4 h-4 rounded-sm bg-secondary-400"></div>
                    <span className="text-orange-700">{userType === "professor" ? "Ended" : "Submitted"}</span>
                </div>

                <div className="flex flex-row w-3/4 flex-wrap gap-x-3">
                    {
                        showAssignments.map((assignment, index) => {
                            return (
                                <Link key={index} href={userType === "professor" ? `/assignments/${assignment._id}` : `/write/${assignment._id}` }>
                                    <div className={`w-48 h-fit rounded-lg p-2 cursor-pointer ${assignment.active ? "bg-secondary-200" : "bg-secondary-400"}`}>
                                        <div>
                                            <span className="text-black text-sm"><span className={`text-orange-700`}>{assignment.title}</span></span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Dashboard