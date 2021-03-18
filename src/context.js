import React, { useState } from 'react';

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
    const [intro, setInto] = useState({
        greeting: "hello",
        name: "John"
    })

    return (
        <RoomContext.Provider value={{ ...intro }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};