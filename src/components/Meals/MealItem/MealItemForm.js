import style from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/cart-context';
import { useContext, useRef } from 'react';

const MealItemForm = (props) => {
  const inputRef = useRef();
  // const cartContext = useContext(CartContext);

  const submitHandler = event => {
    event.preventDefault();
    const quantity = inputRef.current.value;
    const quantityNumber = +quantity;
    props.onAddToCart(quantityNumber);
  }
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input ref={inputRef} label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm;
