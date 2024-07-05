import React from "react";

import './card.styles.css';

export const Card = ({user}) => {
    return (
        <div className='card-container'>
            <h1>{user.name}</h1>
        </div>
    );
};