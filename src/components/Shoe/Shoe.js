import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './shoe.css'

const Shoe = (props) => {
    // console.log(props);

    const {category,img,name,price,ratings} = props.shoe;

    return (
        <div className='mt-5'>
            <div className="card shadow p-5 mb-5 bg-white rounded border-0" style={{'width' : '18rem'}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Name: {name}</h5>
             <h4 className="card-text">
              Price: {price} <br />
              Category: {category} <br />
              Ratings: {ratings}
             </h4>
             <a href="#" className='btn btn-warning d-flex align-items-center'><p className='text'>Add to cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a>

             </div>
            </div>
        </div>
    );
};

export default Shoe;