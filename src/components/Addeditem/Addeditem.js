import React from 'react';

const Addeditem = (props) => {
    console.log(props.cart);
    const {name,img,price} = props.cart[0];
    return (
        <div className='addItem d-flex bg-info rounded w-75 p-2 mb-2'>
            <img className='justify-content-center' src={img} alt="" style={{'width' : '60px' ,'height' : '60px' , 'borderRadius' : '50%' }} />
            <div className='mr-5'>
                {name} <br />
                <p>Price:{price}</p>
            </div>
        </div>
    );
};

export default Addeditem;