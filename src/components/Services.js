import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
    const [icons, setIcons] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempora."
        },
        {
            icon: <FaHiking />,
            title: "endless hiking",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempora."
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempora."
        },
        {
            icon: <FaBeer />,
            title: "strongest beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tempora."
        },
    ])
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {icons.map((listIcons, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{listIcons.icon}</span>
                            <h6>{listIcons.title}</h6>
                            <p>{listIcons.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}
export default Services;