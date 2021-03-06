import './App.css';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from './components/Lobby';
import { useState } from 'react';
import {IMessage} from "./interfaces/IMessage";
import Chat from './components/Chat';



function App() {

  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [user, setUser] = useState<string | null>(null);
  
  const joinRoom = async (user: string, room: string) => {

    setUser(user);

    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7004/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message)  => {
        let m: IMessage = {user, message}
        setMessages(messages => [...messages, m]);
      });

      connection.onclose(e => {
        setConnection(null);
        setMessages([]);
        setUser(null);
      });

      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection);

    } catch (e) {
      console.log(e);
    }

  };

  const sendMessage = async (message:string) => {
    try {
      if(connection)
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  const closeConnection = async () => {
    try{
      if(connection)
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }



  return (
   <div className="App min-w-screen">
     {!connection ?
      <Lobby joinRoom={joinRoom}/>
      :
      <Chat messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} user={user}/>
    }
     
   </div>
  );
}

export default App;
