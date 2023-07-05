import React from 'react'
import s from "./style.module.css"

export default function ProductForm({id, Arr, addProduct, remove}) {
  return (
    <div className={s.formbody}>
        <div className={s.components}>
            <div className={s.inputs}>
            <input type="text" id='input1' placeholder='Название'/>
            <input type="text" id = 'input2'placeholder='Цена'/>
            </div>
            
            <button className={s.button} onClick={()=>
            {
                let input1 = document.getElementById('input1');
                let title = input1.value;

                let input2 = document.getElementById('input2');
                let price = input2.value;

                let id = Arr.length +1;
                let element ={id, title, price};
                

                addProduct({element});
            }
            } type="button">Добавить</button>
            
        </div>
    </div>
  )
}
