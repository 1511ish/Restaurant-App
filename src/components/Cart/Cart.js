import style from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const cartItems = (
        <ul className={style['cart-items']}>
            {cartCtx.items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal onClick={props.onCloseCart}>
            {cartItems}
            <div className={style.total}>
                <span>TotalAmount</span>
                <span>35.62</span>
            </div>
            <div className={style.actions}>
                <button className={style['button-alt']} onClick={props.onCloseCart}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;