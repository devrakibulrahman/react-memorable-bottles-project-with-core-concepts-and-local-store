import { useState } from 'react';
import { useEffect } from 'react';
import { addCartToLocalStore, getLocalStoreData, removeDataToLocalStore } from '../../utility/Utillity.js';
import Bottle from '../Bottle/Bottle';
import Carts from '../Carts/Carts.jsx';
import './Bottles.css';

const Bottles = () => {

    const [bottle, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then((res) => res.json())
            .then((data) => setBottles(data))
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        if(bottle.length){

            const cart = getLocalStoreData();
            setCart(cart);

            const saveCart = [];
            for(const id of cart){
                const cartBottle = bottle.find((bottle) => bottle.id === id);
                if(cartBottle){
                    saveCart.push(cartBottle);
                };
            };

            setCart(saveCart);
        };

    }, [bottle]);

    const handlePurchase = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addCartToLocalStore(bottle.id);
    };

    const handleDeleteToCart = (cartId) => {
        const remainingCart = cart.filter(bottle => bottle.id !== cartId);
        setCart(remainingCart);
        removeDataToLocalStore(cartId);
    };

    return (
        <div>
            <h3>Bottle Available : {bottle.length}</h3>
            <h3>Cart : {cart.length}</h3>
            <Carts cart={cart} handleDeleteToCart={handleDeleteToCart}></Carts>
            <div className='bottle-container'>
                {
                    bottle.map((bottle) => 
                        <Bottle key={bottle.id} bottle={bottle} handlePurchase={handlePurchase}></Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;