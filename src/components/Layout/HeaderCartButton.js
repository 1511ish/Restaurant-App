import React from 'react'
import style from './HeaderCartButton.module.css';
import cartImage from '../../assets/grocery-store.png';

export default function HeaderCartButton(props) {
  return (
     <button className={style.button} onClick={props.onClick}>
        <span className={style.icon}>
            <img src={cartImage} alt="Cart"/>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>3</span>
     </button>
  )
}
