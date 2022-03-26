import React from 'react';
import './Cart-part.css'

const Cardpart = (props) => {
 
    const {cart} = props


    return (
        <div>
            <p>selected item: {cart.length}</p>
            <button className="button "><span>Choose 1 For Me </span></button>

            <button className="button"><span>CHOOSE AGAIN</span></button>
        </div>
    );
};

export default Cardpart;