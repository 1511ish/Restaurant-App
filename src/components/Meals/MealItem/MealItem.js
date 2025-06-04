import style from './MealItem.module.css';
// import MealItemForm from './MealItemForm';
// import CartContext from '../../../store/cart-context';
// import { useContext } from 'react';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

const MealItem = (props) => {
   const price = `$${props.price}`;
   //  const cartCtx = useContext(CartContext);
   //  const addToCartHandler = quantity => {
   //     cartCtx.addItem({
   //       id: props.id,
   //       name: props.name,
   //       quantity: quantity,
   //       price: +props.price
   //     })
   //  }
   const dispatch = useDispatch();
   const addToCartHandler = () => {
      dispatch(cartActions.addItemToCart({
         id: props.id,
         name: props.name,
         quantity: 1,
         price: +props.price
      }));
   }
   return (
      <li className={style.meal}>
         <div>
            <h3>{props.name}</h3>
            <div className={style.description}>{props.description}</div>
            <div className={style.price}>{price}</div>
         </div>
         <div>
            {/* <MealItemForm id={props.id} onAddToCart={addToCartHandler}/> */}
            <button onClick={addToCartHandler}>Add to Cart</button>
         </div>
      </li>
   )
}

export default MealItem;