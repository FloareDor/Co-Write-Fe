import Link from "next/link";
import { FC, ReactNode } from "react";


interface ButtonProps {
    title: string;
    src: string;
    classname?: string;
    children?: ReactNode;
    onClick?: ()=> void;
    disabled: boolean
}

const Button: FC<ButtonProps> = ({ title, src, classname, children, onClick, disabled }) => {
    return (
        <Link href={src} className={`${disabled && "pointer-events-none"} ${classname}`} onClick={onClick}>
            <button className = {`text-gray-900 ${disabled && "pointer-events-none bg-gray-700 text-gray-500"} text-xl py-2 px-3 border-2 rounded-xl border-primary hover:bg-secondary-300 hover:text-white ${classname}`}>{children}{title}</button>
        </Link>

    )
}

export default Button