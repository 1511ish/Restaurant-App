import React from 'react'
import style from './HeaderCartButton.module.css';
import cartImage from '../../assets/grocery-store.png';

export default function HeaderCartButton() {
  return (
     <button className={style.button}>
        <span className={style.icon}>
            <img src={cartImage} alt="Cart"/>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>3</span>
     </button>
  )
}
