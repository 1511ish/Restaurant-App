import React from 'react'
// import { useContext } from 'react';
import style from './HeaderCartButton.module.css';
import cartImage from '../../assets/grocery-store.png';
// import CartContext from '../../store/cart-context';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

// export default function HeaderCartButton(props) {
//    const cartCtx = useContext(CartContext);
//    const noOfCartItems = cartCtx.items.reduce((accumalter, item) => {
//       return accumalter + item.quantity;
//    }, 0);
//    return (
//       <button className={style.button} onClick={props.onClick}>
//          <span className={style.icon}>
//             <img src={cartImage} alt="Cart" />
//          </span>
//          <span>Your Cart</span>
//          <span className={style.badge}>{noOfCartItems}</span>
//       </button>
//    )
// }
export default function HeaderCartButton() {
   const dispatch = useDispatch();
   const noOfCartItems = useSelector((state) => state.cart.totalItems)
   const toggleCartHandler = () => {
      dispatch(uiActions.toggle());
   }
   return (
      <button className={style.button} onClick={toggleCartHandler}>
         <span className={style.icon}>
            <img src={cartImage} alt="Cart" />
         </span>
         <span>Your Cart</span>
         <span className={style.badge}>{noOfCartItems}</span>
      </button>
   )
}
