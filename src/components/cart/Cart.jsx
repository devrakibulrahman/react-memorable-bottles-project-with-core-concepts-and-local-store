import './Cart.css'

const Cart = ({cart, handleDeleteToCart}) => {

    return (
        <div className='cart-box'>
            <img src={cart.img}/>
            <p>Price : {cart.price}$</p>   
            <button onClick={() => handleDeleteToCart(cart.id)}>Delete</button>   
        </div>
    );
};

export default Cart;