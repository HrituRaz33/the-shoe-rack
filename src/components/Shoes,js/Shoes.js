import React, { useEffect, useState } from 'react';
import Cardpart from '../Selected-cart/Cartpart';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {

    const [shoes, shoesState] = useState([]);
    const [cart, setCart] = useState([]);
    
    const chooseForMe = (show) =>{
        for(let i=0; i<cart.length; i++){
            var show = [cart[Math.floor(Math.random()*cart.length)]];
            setCart(show);
        }
    }
    const removeItem = () =>{
        setCart([]);
    }


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
            <div className='col-sm-3 mx-auto bg-muted'>
                <h1 className='animate__flip animate__animated animate__bounce animate__repeat-2 text-info '>Selected Items</h1>
                <Cardpart chooseForMe={chooseForMe} removeItem={removeItem} cart={cart} ></Cardpart>
            </div>
            <div className='col-sm-9'>
                <div className=' row row-cols-1 row-cols-md-3 w-100 mx-auto container mt-3 mb-3'>
                    {
                        shoes.map( shoe => <Shoe shoe={shoe} key={shoe.id} addToCart={addToCart}></Shoe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shoes;