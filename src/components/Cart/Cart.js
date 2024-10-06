import style from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, quantity: 1 });
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItems = (
        <ul className={style['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );
    const totalAmount = `$${cartCtx.totalAmount}`;
    return (
        <Modal onClick={props.onCloseCart}>
            {cartItems}
            <div className={style.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button-alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;