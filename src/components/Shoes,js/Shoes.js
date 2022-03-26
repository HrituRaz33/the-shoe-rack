import React, { useEffect, useState } from 'react';
import Cardpart from '../Selected-cart/Cart-part';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {

    const [shoes, shoesState] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('shoes.json')
        .then(res => res.json())
        .then(data => shoesState(data));
    },[]);

    const addToCart = (shoe) =>{
        const newCart = [...cart, shoe];
        setCart(newCart);
    }


    return (
        <div className='row'>
            <div className='col-sm-9'>
                <div className=' row row-cols-1 row-cols-md-3 w-100 mx-auto container mt-3 mb-3'>
                    {
                        shoes.map( shoe => <Shoe shoe={shoe} key={shoe.id} addToCart={addToCart}></Shoe>)
                    }
                </div>
            </div>
            <div className='col-sm-3 mx-auto'>
                <h1 className='animate__flip animate__animated animate__bounce animate__repeat-2 text-info'>Selected Items</h1>
                <Cardpart cart={cart} ></Cardpart>
            </div>
        </div>
    );
};

export default Shoes;