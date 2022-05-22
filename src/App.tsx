import './App.css';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from './components/Lobby';
import { useState } from 'react';


interface Message {
  user: string,
  message: string
}

function App() {

  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  
  const joinRoom = async (user: string, room: string) => {

    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7004/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message)  => {
        let m: Message = {user, message}
        setMessages(messages => [...messages, m]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection);

    } catch (e) {
      console.log(e);
    }

  };


  return (
   <div className="App">
     <Lobby joinRoom={joinRoom}/>
   </div>
  );
}

export default App;
