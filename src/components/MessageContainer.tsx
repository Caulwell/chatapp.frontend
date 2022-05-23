import {IMessage} from "../interfaces/IMessage";


interface MessageContainerProps{
    messages: IMessage[]
    user: string | null
}

const MessageContainer = ({messages, user} : MessageContainerProps) => {

    return (
        <div className={`flex flex-col flex-auto min-w-full mx-auto text-end p-2 pt-6 space-y-3 overflow-auto h-0`}>
        {messages.map(m => {
            return (
                <div className={`flex flex-col w-fit space-y-1 ${m.user == user ? "self-end" : ""}`}>
                     <div className="px-4 py-1 bg-gray-100 w-fit rounded-full text-slate-600 shadow-md">{m.message}</div>
                     <div className={`px-3 w-full rounded-full  font-extralight text-xs ${m.user == user ? "text-right" : ""}`}>{m.user == user ? "You" : m.user}</div>
                </div>
               
            )
        })}
    </div>
    )

}

export default MessageContainer;