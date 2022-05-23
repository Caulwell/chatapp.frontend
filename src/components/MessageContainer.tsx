import {IMessage} from "../interfaces/IMessage";


interface MessageContainerProps{
    messages: IMessage[]
}

const MessageContainer = ({messages} : MessageContainerProps) => {

    return (
        <div className="flex flex-col flex-auto min-w-full mx-auto text-end p-2 pt-6 space-y-3 overflow-auto h-0">
        {messages.map(m => {
            return (
                <div className="flex flex-col">
                     <div className="px-4 py-1 text-white bg-indigo-600 w-fit rounded-full">{m.message}</div>
                     <div className="px-2 w-fit rounded-full font-extralight text-xs">{m.user}</div>
                </div>
               
            )
        })}
    </div>
    )

}

export default MessageContainer;