import React from 'react'
import s from "./style.module.css"

export default function Product({id, title, price, remove}) {
  return (
    <div className={s.product}>
      <div className={s.card}>
        <p>{title}</p>
        <p>{price}</p>
        
        
      </div>
        <button className={s.button} onClick={()=> remove(id)}>X</button>
    </div>
  )
}
