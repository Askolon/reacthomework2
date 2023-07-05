import ProductForm from '../ProductForm';
import ProductList from '../ProductList';
import './style.module.css';
import { useState } from 'react';


function App() {

  const productList = [
    {id:1, title:'bice', price:'1500'},
    {id:2, title:'snowboard', price:'850'}
  ]

  const [Arr, setArr] = useState(productList);

  function addProduct({element}){
    //console.log({element});
    Arr.push({id: element.id, title: element.title, price: element.price});
    

    setArr([...Arr]);
    //console.log(Arr);
  }
  function remove(id){
    const newArr = Arr.filter(item => item.id !== id);
    setArr(newArr);
  }

  return (
    <div>
      <ProductForm Arr={Arr} remove={remove} addProduct={addProduct}/>
      <ProductList Arr={Arr} remove={remove}/>
    </div>
  );
}

export default App;
