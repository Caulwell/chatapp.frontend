import { useState } from "react";
import {IMessage} from "../interfaces/IMessage";
import MessageContainer from "./MessageContainer";
import Nav from "./Nav";

interface ChatProps{
    messages: IMessage[]
    sendMessage: (message:string) => void
}

const Chat = ({messages, sendMessage} : ChatProps) => {

    const [message, setMessage] = useState<string>("");

    return (
        // SCREEN
        <div className="container flex flex-col min-h-screen pb-3 min-w-full">
            <Nav/>
           <MessageContainer messages={messages}/>

            {/* Form footer */}
            <form 
            className="flex px-6 min-w-full "
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
                className="" 
                placeholder="Type a message..." 
                />
                <button 
                className=""
                >
                    Send
                </button>
            </form>
           
        </div>
    )

}

export default Chat;