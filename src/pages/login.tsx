import Image from "next/image";
import GoogleLogo from "../../public/google.svg"
import Button from "../components/Button/index";
import { Inter } from "next/font/google";
import axios from "axios";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google"
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Login = () => {

    const [userType, setUserType] = useState<string>("student")

    const postAuthenticate = async (tokenResponse: TokenResponse) => {

        const userInfo = await axios.post("http://157.245.240.148:8000/verify-user", {
            accessToken: tokenResponse.access_token,
            userType: userType
        }).then((res) => {
            const authToken = res.headers['authorization'];
            console.log("Axios success, storing Auth Token: ", authToken);
            localStorage.setItem('authToken', authToken);
            return res.data;
        })

        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        window.location.href = "/dashboard";
    }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: postAuthenticate,
        flow: "implicit"
    });

    return (
        <div className="w-screen h-screen bg-bgmain flex justify-center">
            <div className={`${inter.className} flex flex-col items-center gap-y-8 h-fit mt-40`}>
                <div className="flex flex-col gap-y-2 items-center">
                    {/* <Logo /> */}
                    <span className="font-extrabold text-3xl mt-2 text-gray-900">Welcome !</span>
                    <h3 className="font-medium text-gray-700">Please enter your details.</h3>
                </div>
                <div className="flex flex-col gap-y-4 items-center w-[340px]">
                    <div className="w-full flex flex-col gap-y-3 mb-4">
                        <span className="text-black">Login as</span>
                        <div className="relative flex flex-row w-full h-12 border-2 border-secondary-400 rounded-xl text-primary overflow-hidden">
                            <div className="z-10 w-1/2 flex items-center justify-center cursor-pointer"
                            onClick={() => {setUserType("student")}}>
                                <span>Student</span>
                            </div>
                            <div className="z-10 w-1/2 flex items-center justify-center cursor-pointer"
                            onClick={() => {setUserType("professor")}}>
                                <span>Professor</span>
                            </div>
                            <div className={`transform duration-100 ease-in absolute w-1/2 top-0 h-12 bg-secondary-200
                             ${userType === "student" ? "left-0" : "left-1/2"}`}></div>
                        </div>
                    </div>
                    <input type="text" placeholder="Email" className="text-black rounded-lg w-full px-4 py-3 border-[1px] bg-secondary-200  border-secondary-600" />
                    <input type="text" placeholder="Password" className="rounded-lg w-full px-4 py-3 border-[1px] bg-secondary-200  border-secondary-600" />
                    <Button disabled={false} title="Continue" src="#" classname="w-full" />
                    <div className="flex flex-row w-full items-center justify-center">
                        <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                        <span className="px-3 text-black">OR</span>
                        <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                    </div>
                    <Button disabled={false} src="#" title="Continue with Google" classname="flex flex-row items-center justify-center gap-x-2 w-full"
                        onClick={loginWithGoogle}>
                        <Image src={GoogleLogo} alt="google" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login