import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem = (props) => {
    const price = `$${props.price}`;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = quantity => {
       cartCtx.addItem({
         id: props.id,
         name: props.name,
         quantity: quantity,
         price: +props.price
       })
    }
    return (
       <li className={style.meal}>
         <div>
            <h3>{props.name}</h3>
            <div className={style.description}>{props.description}</div>
            <div className={style.price}>{price}</div>
         </div>
         <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
         </div>
       </li>
    )
}

export default MealItem;