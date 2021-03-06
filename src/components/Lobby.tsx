import { useState } from "react";

interface LobbyProps{
    joinRoom: (user: string, room: string) => void;
}

const Lobby = ({joinRoom} : LobbyProps) => {

    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");



    return (
            <>
              <div className="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join a room</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                    </p>
                  </div>

                  <form className="mt-8 space-y-6" onSubmit={e => {
                      e.preventDefault();
                      joinRoom(user, room);
                  }}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          name
                        </label>
                        <input
                          value={user}
                          onChange={e => setUser(e.target.value)}  
                          id="name"
                          name="username"
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Choose a name..."
                        />
                      </div>
                      <div>
                        <label htmlFor="room" className="sr-only">
                          Room Name
                        </label>
                        <input
                          value={room}
                          onChange={e => setRoom(e.target.value)}    
                          id="room"
                          name="room"
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Choose a room..."
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                         
                        </span>
                        Join
                      </button>
                    </div>
                  </form>



                </div>
              </div>
            </>
    )

}

export default Lobby;