import React from 'react';

const Addeditem = (props) => {
    console.log();
    const {name} = props.cart[0];
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Addeditem;