import React, { useState, useEffect } from 'react';
import items from './data';

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
    const [intro, setIntro] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    });

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true );
        setIntro({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false
        });
        // return () => {
        //     cleanup
        // }
    }, []);

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id}
            return room;
        })
        return tempItems;
    }

    return (
        <RoomContext.Provider value={{ ...intro }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};