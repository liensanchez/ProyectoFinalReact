import React from 'react'
import CartForm from '../CartForm/CartForm'
import { useCartContext } from '../Context/cartContext'


function Cart() {

  const {cartList, removeCart, total,  eliminateFromCart} = useCartContext()

  return (
    <>
    <div className='d-flex flex-column align-items-center'>
      {cartList.map(prod =><li key={prod.id}> Articulo: {prod.name} Cantidad:{prod.cantidad} 
                          <img src={prod.img} className="img-fluid" alt="" />
                          <button onClick={() =>eliminateFromCart(prod.id)} >X</button>
                           </li>)}
      <h2>Total: ${total} </h2>
      <button className='btn btn-danger' onClick={removeCart}>Vaciar carrito</button>
      <CartForm />
    </div>
    </>
  )
}

export default Cart