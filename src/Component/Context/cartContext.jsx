import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}){


  const [cartList, setCartList] = useState([])

  const [total, setTotal]= useState(0)

    useEffect(() => {
        var t = 0
        const totals = cartList.map( p => p.precio * p.cantidad)
        totals.map( p => t = t + p)
        setTotal(t)
    }, [cartList])

  const removeCart =() =>{
    setCartList([])
  }  

  const addToCart=(item)=>{
    setCartList([
      ...cartList,
      item
    ])
  }

  const eliminateFromCart=(id)=>{
    setCartList(cartList.filter(product => product.id !== id))
    }


  return(

    <CartContext.Provider value={{
      cartList,
      eliminateFromCart,
      total,
      addToCart,
      removeCart
    }}>
      {children}
    </CartContext.Provider>
  )

}

export default CartContextProvider