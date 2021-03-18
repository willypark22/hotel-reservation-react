import React, { useContext } from 'react';
import { RoomContext } from '../context';

const FeaturedRooms = () => {
    const context = useContext(RoomContext);
    const {name, greeting} = context;

    return (
        <div>
            {greeting} {name} from featured rooms
        </div>
    )
}

export default FeaturedRooms;