import React, { useState, useContext } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { RoomContext } from '../context';

const SingleRoom = () => {
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();

    const [roomData, setRoomData] = useState({
        slug: match.params.slug,
        defaultBcg
    });

    const context = useContext(RoomContext);
    const { getRoom } = context;
    const room = getRoom(roomData.slug);
    
    if(!room) {
        return(
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        )
    }
    
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;


    return (
        <Hero hero='roomsHero'>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </Hero>
    )
}

export default SingleRoom;