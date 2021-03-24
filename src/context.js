import React, { useState, useEffect, Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
    };
  
    componentDidMount() {
      let rooms = this.formatData(items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
      console.log(this.state);
    }
  
    formatData(items) {
      let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
  
        let room = { ...item.fields, images, id };
        return room;
      });
      return tempItems;
    }

    getRoom = slug => {
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find(room => room.slug === slug);
      return room;
    }

    handleChange = event => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      console.log(name, value);
  
      this.setState(
        {
          [name]: value
        },
        this.filterRooms
      );
    }

    filterRooms = () => {
      let {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
      } = this.state;

    }

    render() {
      return (
        <RoomContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}
        </RoomContext.Provider>
      );
    }
  }
  const RoomConsumer = RoomContext.Consumer;
  
  export { RoomProvider, RoomConsumer, RoomContext };



// Attempt at React Hooks
// const RoomProvider = ({ children }) => {
//     const [intro, setIntro] = useState({
//         rooms: [],
//         sortedRooms: [],
//         featuredRooms: [],
//         loading: true,
//         type: 'all',
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,
//         minSize: 0,
//         maxSize: 0,
//         breakfast: false,
//         pets: false
//     });

//     useEffect(() => {
//         let rooms = formatData(items);
//         let featuredRooms = rooms.filter(room => room.featured === true);
//         let maxPrice = Math.max(...rooms.map(item => item.price));
//         let maxSize = Math.max(...rooms.map(item => item.size));
//         setIntro({
//             rooms, 
//             featuredRooms, 
//             sortedRooms: rooms, 
//             loading: false,
//             price: maxPrice,
//             maxPrice,
//             maxSize
//         });
//         // return () => {
//         //     cleanup
//         // }
//     }, []);

//     const formatData = (items) => {
//         let tempItems = items.map(item => {
//             let id = item.sys.id;
//             let images = item.fields.images.map(image => image.fields.file.url);
//             let room = {...item.fields, images, id}
//             return room;
//         })
//         return tempItems;
//     };

//     const getRoom = (slug) => {
//         let tempRooms = [...intro.rooms];
//         const room = tempRooms.find(room => room.slug === slug);
//         return room;
//     };

//     const handleChange = (event) => {
//         const target = event.target;
//         const value = event.type === 'checkbox' ? target.checked : target.value;
//         const name = event.target.name;
//         console.log(name, value);
//         setIntro({
//             [name]: value
//         });
//     };

//     const filterRooms = () => {
//         console.log("hello");
//     };

//     console.log({children});

//     return (
//         <RoomContext.Provider value={{ ...intro, getRoom: getRoom, handleChange: handleChange }}>
//             {children}
//         </RoomContext.Provider>
//     );
// }

// const RoomConsumer = RoomContext.Consumer;

// export {RoomProvider, RoomConsumer, RoomContext};