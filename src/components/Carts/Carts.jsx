import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = ({cart, handleDeleteToCart}) => {

    return (
        <div className='cart-container'>
            {
                cart.map((cart) => <Cart key={cart.id} cart={cart} handleDeleteToCart={handleDeleteToCart}/>)
            }
        </div>
    );
};

export default Carts;