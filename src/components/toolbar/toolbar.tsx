import Image from "next/image";
import VerticalLine from "./vertical_line";
import Toolsection from "./toolsection";
import ToolIcon from "./tool_icon";
import Dropdown from "../dropdown";

const Toolbar = () => {
	return (
		<div className="lg:px-8 md:px-6 sm:px-4">
			<div className="overflow-hidden flex flex-row justify-between gap-8 items-center shadow-2xl shadow-bgmain bg-peach-500 rounded-xl h-14 w-full lg:px-6 md:px-6 sm:px-6 overflow-x-auto lg:rounded-full md:rounded-full sm:rounded-full ">
				<div className="flex flex-row items-center justify-start gap-10 h-full">
					<div className="flex flex-row gap-5 items-center justify-around">
						<ToolIcon img="/images/undo.svg" className="w-7" />
						<ToolIcon img="/images/redo.svg" className="w-7" />
					</div>
					<VerticalLine />
					<div className="flex flex-row items-center gap-4">
						<Toolsection text="Paragraph" />
						<Toolsection text="Aptos" />
						{/* <Dropdown/> */}
						
					</div>
					<VerticalLine/>
					<Toolsection text="12"/>
					<VerticalLine />
					<div className="flex flex-row items-center gap-4">
						<ToolIcon img="/images/toolbar/bold.svg"/>
						<ToolIcon img="/images/toolbar/italic.svg" />
						<ToolIcon img="/images/toolbar/underlined.svg" />
						<ToolIcon img="/images/toolbar/strikethrough.svg" />
						<ToolIcon img="/images/toolbar/text_color.svg" className="w-8" />
						<ToolIcon img="/images/toolbar/border_color.svg" />
						</div>
					<VerticalLine />
					<div className="flex flex-row items-center gap-4">
						<ToolIcon img="/images/toolbar/link.svg"/>
						<ToolIcon img="/images/toolbar/image.svg" />
					</div>
				</div>
				<ToolIcon img="/images/toolbar/options.svg" className="w-1.5" />
				
			</div>
			
		</div>

		
	)
}

export default Toolbar;