import Image from "next/image"
import Link from "next/link";
import ToolIcon from "./tool_icon";


interface textProp{
	text: string;
}
const Toolsection = ({ text }: textProp) => {
	return (
		<div className="flex flex-row items-center gap-4 lg:pl-3 sm:pl-2">
			<span className="text-black text-xl font-semibold  lg:text-2xl">{text}</span>
			
			<ToolIcon img="/images/toolbar/expand_more.svg" w={18} />
		</div>
	)
}

export default Toolsection;