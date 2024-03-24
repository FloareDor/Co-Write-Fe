import NavbarDashboard from "@/components/navbar/navbarDashboard"
import { FaCopy } from "react-icons/fa";
import { useRouter } from 'next/router';

const AssignmentPage = () => {

    const router = useRouter();
    return (
        <div>
            <div className="w-screen">
                <NavbarDashboard />

                <div className="p-8 flex flex-col gap-y-2">
                    <span className="text-xl font-semibold text-orange-700 ">Share the following code with the students: </span>
                    <div className="flex flex-row items-center gap-2">
                        <div className="h-10 rounded border-2 bg-primary border-orange-600 w-fit p-2 flex items-center justify-center">
                            <span className="text-black">{router.asPath.split("/")[2]}</span>
                           
                        </div>
                        <FaCopy  className="text-black cursor-pointer"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AssignmentPage