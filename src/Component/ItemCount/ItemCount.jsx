import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";


const ItemCount= ({ stock, onAdd})=> {

  const [ count, setCount] = useState(0)

   const useCount =()=>{
    if (count<stock ){
      setCount(count+1)
    }
  }
  
const InputCount= ()=> {

  return (
      <>
      <Link to='/carrito' >
          <button 
              className="btn btn-outline-primary" 
          >Terminar compra</button> 
      </Link>
      <Link to='/'>
          <button 
              className="btn btn-outline-primary" 
          >Seguir comprando</button>
      </Link>    
      </>
  )
}


const ButtonCount= ({handleInter})=> {
  return <button 
              className="btn btn-outline-success" 
              onClick={() => {addQuantity();handleInter()}}
          >Agregar al carrito</button>

}

  const [inputType, setInputType ] = useState('button')

  const handleInter=()=>{
      setInputType('input')
  }

  const addQuantity = () => {
    onAdd( count )
}


  return (

    <>  
    <label className="border-success"  >{count} </label>    
    <button onClick={useCount} className="btn btn-outline-success" >+1</button>
    {
              inputType === 'button' ? 
                  <ButtonCount handleInter={handleInter} />
              : 
                  <InputCount />
          }
    </>

  )
}

export default ItemCount