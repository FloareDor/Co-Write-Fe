import Navbar from "@/components/navbar/navbar";
import Toolbar from "@/components/toolbar/toolbar";
import { useEffect, useRef, useState, MutableRefObject } from "react";

const Write = () => {
    return (
		<div className="bg-bgmain flex flex-col min-h-screen w-screen gap-14 relative">
			<div className="flex flex-col justify-center gap-0 fixed top-0 start-0 z-10">
				<Navbar />
				<div className="">
					<Toolbar />
				</div>
			</div>
			
			<div className="flex flex-row justify-start mt-40 lg:mt-40 md:mt-40 sm:mt-40 px-16">
				<textarea
				className="
				resize-none no-scrollbar overflow-y-auto scroll-smooth
				outline-none focus:outline-none
				font text-black text-2xl font-semibold text-justify 
				border-none rounded-sm border-0 min-h-[45rem] bg-bgmain w-6/6 p-20 
				lg:rounded-2xl md:rounded-2xl sm:rounded-2xl lg:w-4/6 md:w-4/6 sm:w-4/6 lg:border-2 md:border-2 sm:border-2 resize-vertical
				"
				placeholder="Type or paste (Ctrl+v) your text here."
				></textarea>
			</div>
        </div>
    );
}

export default Write;