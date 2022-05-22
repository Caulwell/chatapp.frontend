import { useState } from "react";
import {IMessage} from "../interfaces/IMessage";

interface ChatProps{
    messages: IMessage[]
    sendMessage: (message:string) => void
}

const Chat = ({messages, sendMessage} : ChatProps) => {

    const [message, setMessage] = useState<string>("");

    return (
        <div className="flex-1  sm:p-6 justify-between flex flex-col h-screen bg-red">
            <div className="flex flex-col p-4 items-end max-h-[70%] p:2">
                {messages.map(m => {
                    return (
                        <div className="min-w-fit">{m.message}</div>
                    )
                })}
            </div>
            <form 
            className="flex min-w-screen"
            onSubmit={e => {
                e.preventDefault();
                sendMessage(message);
                setMessage("");
            }}
            >
                <input 
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text" 
                className="rounded pl-6 min-w-[95%] py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white" 
                placeholder="Type a message..." 
                />
                <button 
                className="bg-gray-900  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded"
                >
                    Send
                </button>
            </form>
           
        </div>
    )

}

export default Chat;