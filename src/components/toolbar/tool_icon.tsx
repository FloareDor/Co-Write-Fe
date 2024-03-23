import Link from "next/link"
import Image from "next/image"
import { twMerge } from 'tailwind-merge'

interface imagePath{
	img: string;
	w?: number;
	className?: string;
}
const ToolIcon = ({ img, w = 34, className = "" }: imagePath) => {
	return (
		<Link href="/write"> <Image className={twMerge("hover:bg-[#DFE4EB]", className)} src={img} alt="icon" width={w} height={w} /> </Link>
	)
}

export default ToolIcon;