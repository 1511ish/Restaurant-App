import style from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { cartActions } from '../../store/cart-slice';

const Cart = props => {
    const Cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const cartItemAddHandler = (item) => {
        dispatch(cartActions.addItemToCart(item));
    }

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }

    const closeHandler = () =>{
        dispatch(uiActions.toggle());
    }
    const cartItems = (
        <ul className={style['cart-items']}>
            {Cart.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.totalPrice}
                    quantity={item.quantity}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );
    const totalAmount = `$${Cart.totalAmount}`;
    return (
        <Modal onClick={props.onCloseCart}>
            {cartItems}
            <div className={style.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button-alt']} onClick={closeHandler}>Close</button>
                {Cart.totalItems>0 && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}

// const Cart = props => {
//     const cartCtx = useContext(CartContext);
//     const hasItems = cartCtx.items.length > 0;
//     const cartItemAddHandler = (item) => {
//         cartCtx.addItem({ ...item, quantity: 1 });
//     }

//     const cartItemRemoveHandler = (id) => {
//         cartCtx.removeItem(id);
//     }
//     const cartItems = (
//         <ul className={style['cart-items']}>
//             {cartCtx.items.map((item) => (
//                 <CartItem
//                     key={item.id}
//                     name={item.name}
//                     price={item.price}
//                     quantity={item.quantity}
//                     onAdd={cartItemAddHandler.bind(null, item)}
//                     onRemove={cartItemRemoveHandler.bind(null, item.id)}
//                 />
//             ))}
//         </ul>
//     );
//     const totalAmount = `$${cartCtx.totalAmount}`;
//     return (
//         <Modal onClick={props.onCloseCart}>
//             {cartItems}
//             <div className={style.total}>
//                 <span>TotalAmount</span>
//                 <span>{totalAmount}</span>
//             </div>
//             <div className={style.actions}>
//                 <button className={style['button-alt']} onClick={props.onCloseCart}>Close</button>
//                 {hasItems && <button className={style.button}>Order</button>}
//             </div>
//         </Modal>
//     )
// }

export default Cart;