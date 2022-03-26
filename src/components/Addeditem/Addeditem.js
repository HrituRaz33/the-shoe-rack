import React from 'react';

const Addeditem = (props) => {
    const {name,img,price} = props.shoe;
    return (
        <div className='addItem d-flex bg-info rounded w-75 p-2 mb-2'>
            <img className='justify-content-center rounded-circle' src={img} alt="" style={{'width' : '60px' ,'height' : '60px' , 'borderRadius' : '50%' }} />
            <div className='mr-5'>
                {name}
            </div>
        </div>
    );
};

export default Addeditem;