import './Bottle.css';

const Bottle = ({bottle, handlePurchase}) => {

    return (
        <div className='bottle-card'>
            <h4>Bottle Brand Name : {bottle.name}</h4>
            <img src={bottle.img} alt="" />
            <p>Bottle Price : {bottle.price}$</p>
            <button onClick={() => handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;