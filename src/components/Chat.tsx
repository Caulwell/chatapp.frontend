import { useState } from "react";
import {IMessage} from "../interfaces/IMessage";
import MessageContainer from "./MessageContainer";
import Nav from "./Nav";

interface ChatProps{
    messages: IMessage[]
    sendMessage: (message:string) => void
    closeConnection: () => void
    user: string | null
}

const Chat = ({messages, sendMessage, closeConnection, user} : ChatProps) => {

    const [message, setMessage] = useState<string>("");

    return (
        // SCREEN
        <div className="container flex flex-col min-h-screen pb-3 min-w-full">
            <Nav closeConnection={closeConnection}/>
           <MessageContainer messages={messages} user={user}/>

            {/* Form footer */}
            <form 
            className="flex px-4 min-w-full space-x-4"
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
                className="rounded flex-1 border-0 shadow-slate-300 shadow-sm"
                placeholder="Type a message..." 
                />
                <button 
                className="p-1 px-5 text-white bg-indigo-700 rounded hover:bg-indigo-700"
                >
                    Send
                </button>
            </form>
           
        </div>
    )

}

export default Chat;