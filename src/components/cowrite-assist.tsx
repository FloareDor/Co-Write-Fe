import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import { SlArrowUp } from "react-icons/sl"
import { usePathname } from 'next/navigation'

interface AIMessage {
    message: string
    type: string
}

const CowriteAssist = () => {
    const [messages, setMessages] = useState<AIMessage[]>([] as AIMessage[])
    const [currMessage, setCurrMessage] = useState<string>("")

    const pathname = usePathname()

    const askQuestion = async (e) => {
        e.preventDefault()
        setMessages(prevMessages => [
            ...prevMessages,
            {
                message: currMessage,
                type: 'human'
            }
        ]);

        const formData = new FormData();
        formData.append("user_query", currMessage);
        formData.append("assignment_id", pathname.split("/")[2]);
        try {
            const response = await axios.post('http://157.245.240.148:8000/chat', formData,
                {
                    headers: {
                        Authorization: `${localStorage.getItem("authToken")}`,
                    },
                })
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    message: response.data.response,
                    type: 'ai'
                }
            ]);
            console.log(messages)
            setCurrMessage('');
        } catch (error) {
            console.error("Error in AI response", error)
            setCurrMessage('');
        }
    }

    return (
        <div className='absolute top-0 right-0 flex flex-col px-3 pt-6 text-black rounded-l-[4rem] h-full bg-[#EDE8E7] w-80'>
            <span className='mx-auto text-2xl mb-6'>Co.write Assist</span>
            <div className="flex flex-col gap-y-4 w-full px-3 mx-auto h-[calc(100%-10rem)] overflow-scroll">
                {messages.map((message, index) => {
                    return (
                        <div key={index} className={`flex flex-col w-full ${message.type === "human" ? "items-end" : "items-start"}`}>
                            <div className={`flex flex-row gap-x-2 items-center ${message.type === "human" ? "items-end" : "items-start"}`}>
                                <Image src={`${message.type === "human" ? "/images/account.svg" : "/images/Magicwand.svg"}`} alt="Account" width={30} height={30} className="w-8 h-8" />
                                <span>{message.type === "human" ? "You" : "Assistant"}</span>
                            </div>
                            <div className='bg-white p-2 rounded-2xl my-2 max-w-[86%] text-wrap overflow-hidden'>
                                <span className="text-sm">{message.message}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='absolute w-[17rem] bg-white h-14 rounded-bl-[2.5rem] rounded-2xl overflow-hidden flex flex-row bottom-4'>
                <textarea value={currMessage} onChange={(e) => { setCurrMessage(e.target.value) }} placeholder='Ask a question ...' name="" id="" className='w-3/4 h-full p-3 text-sm focus:outline-none'></textarea>
                <div className=' rounded-l-2xl bg-orange-600 h-full w-1/4 cursor-pointer flex items-center justify-center'
                    onClick={askQuestion}>
                    <SlArrowUp className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default CowriteAssist