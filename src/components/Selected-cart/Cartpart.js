import React from 'react';
import Addeditem from '../Addeditem/Addeditem';
import './Cartpart.css'

const Cardpart = (props) => {

    const {cart,chooseForMe,removeItem} = props;


    return (
        <div>
            {
                cart.map( shoe => <Addeditem shoe={shoe}></Addeditem>)
            }
            
            <button onClick={chooseForMe}  className="button "><span>Choose 1 For Me </span></button>

            <button onClick={removeItem} className="button"><span>CHOOSE AGAIN</span></button>
        </div>
    );
};

export default Cardpart;