import React, { useState, useContext } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

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
    const [mainImg, ...defaultImg] = images;

    return (
        <>
            <StyledHero image={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        defaultImg.map((item, index) => (
                            <img key={index} src={item} alt={name} />
                        ))
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>Max Capacity: {capacity} {capacity > 1 ? "people" : "person"}</h6>
                        {/* <h6>Max Capacity: {capacity > 1 ? `${capacity} People` : `${capacity} Person`}</h6> */}
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {
                        extras.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default SingleRoom;