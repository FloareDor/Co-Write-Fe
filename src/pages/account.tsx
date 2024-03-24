import { User } from "@/types/types";
import { useEffect, useState } from "react";

const Account = () => {

    const [userInfo, setUserInfo] = useState<User>()

    useEffect(() => {
        const userInfoString = localStorage.getItem('userInfo');

        if (!userInfoString) {
            window.location.href = "/login";
        }

        if (userInfoString) {
            setUserInfo(JSON.parse(userInfoString).userData);
        } else {
            console.log('No userInfo found in localStorage.');
        }
        console.log("userInfo: ", userInfo);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
        window.location.href = "/login";
    };
    return (
        userInfo &&
        <div className="flex flex-col gap-y-6 p-4 w-4/5 m-auto">
            <div className="w-full flex flex-row justify-between items-end text-right">
                <span className="font-bold text-lg text-[#606060]">Co.Write Account</span>
                <div className="flex flex-row items-center gap-x-6">
                    <button className="border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg" onClick={() => {window.location.href = "/dashboard"}}>Dashboard</button>
                    <button className="border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg" onClick={handleLogout}>Sign out</button>
                </div>
            </div>
            <span className="w-full h-[1px] bg-[#ff000030]"></span>
            <div className="flex flex-col gap-y-12 w-full">
                <div className="flex flex-row gap-x-4  items-end">
                    <span className="font-semibold text-4xl text-primary">Welcome</span>
                    <span className="font-extrabold text-5xl text-orange-700 ">{userInfo.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Account;