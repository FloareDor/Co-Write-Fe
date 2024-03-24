import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';

const NavbarDashboard = () => {
    const router = useRouter()
    
    return (
        <div className="w-screen flex flex-row justify-between items-center p-5 bg-secondary-100">
            <span className="text-3xl text-primary font-semibold">CO
                <span className="text-orange-600">.</span>
                <span className="">WRITE</span>
            </span>
            <div className="flex flex-row gap-x-6">
                {router.asPath !== "/dashboard" &&
                    <Link href={`/dashboard`}>
                        <button className="border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-4 py-2 rounded-lg">Dashboard</button>
                    </Link>
                }
                <Link href={`/account`}>
                    <Image src="/images/account.svg" alt="Account" width={30} height={30} className="w-10 h-10" />
                </Link>
            </div>
        </div>
    )
}

export default NavbarDashboard