import React, { useContext } from 'react';
import { RoomConsumer, RoomContext } from '../context';
import Title from '../components/Title';

// Get unique values
const getUnique = (items, value) => {
    // Creates a new Set
    // Set function only accepts new unique values,
    // so if it already exists, it won't accept.
    return [...new Set(items.map(item => item[value]))];
}

const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;

    // Get unique types
    let types = getUnique(rooms, 'type');

    // Add all
    types = ['all', ...types];

    // Map to JSX 
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">
                        room type
                    </label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End Select Type */}
            </form>
        </section>
    )
}

export default RoomsFilter