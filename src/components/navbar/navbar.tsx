import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  var [documentName, setDocumentName] = useState("My Document");
  const [isEditing, setIsEditing] = useState(false);

  const handleDocumentNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleDocumentNameKeyDown = (event) => {
    if (event.key === "Enter") {
      const newDocName = event.target.value.trim();
      if (newDocName === "") {
        setDocumentName("untitled document");
      } else {
        localStorage.setItem("docName", documentName);
        setDocumentName(newDocName);
      }
      setIsEditing(false);
    }
  };
  useEffect(() => {
    // localStorage.clear();
    let docName;
    // If docname exists
    docName = localStorage.getItem("docName") || "My Document";
    setDocumentName(docName);
  }, [])


  return (
    <nav className=" w-screen flex flex-row justify-between items-center bg-bgmain h-28 gap-0.5 px-3 lg:px-5 md:px-5 sm:px-5 lg:h:28 md:h-28 sm:h-28">
      {/* Left side */}
      <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-6 md:gap-6 sm:gap-6">
        <Link href="/dashboard" >
          <Image src="/images/home.svg" alt="Home" width={24} height={24} className="w-11 h-11 flex-shrink-0" />
        </Link>
        {isEditing ? (
          <input
            type="text"
            placeholder="untitled document"
            value={documentName}
            onChange={handleDocumentNameChange}
            onKeyDown={handleDocumentNameKeyDown}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="text-black font-bold text-2xl h-auto max-w-24 lg:max-w-xs md:max-w-[16rem] sm:max-w-44 outline outline-2 p-1 outline-black rounded-md hover:bg-white"
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className="text-black font-bold text-2xl h-auto p-1 hover:bg-white hover:outline outline-1 outline-black rounded-md cursor-pointer truncate max-w-24 lg:max-w-xs md:max-w-[16rem] sm:max-w-44"
          >
            {documentName}
          </span>
        )}
      </div>

      {/* Right side  */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center justify-between gap-1 bg-primary rounded-full lg:gap-4">
          <Link href="/write">
            <Image src="/images/clock.svg" alt="Clock" width={50} height={50} className="h-10 w-10" />
          </Link>
          <span className="text-black font-semibold text-medium lg:text-2xl md:text-xl pr-1.5 lg:pr-5 md:pr-5 sm:pr-5">2 hrs</span>
        </div>
        <Link href="/account">
          <Image src="/images/account.svg" alt="Account" width={50} height={50} className="w-10 h-10" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
