import React from 'react'
import NavBar from '../Component/NavBar/NavBar'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import CartWidget from '../Component/CartWidget/CartWidget'
import CartContextProvider from '../Component/Context/cartContext'
import ItemCategoryContainer from '../Component/ItemCategoryContainer/ItemCategoryContainer'
import ItemListContainer from '../Component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../Component/ItemDetailContainer/ItemDetailContainer'


function RoutesApp() {


  return (
    
    <div>
      <BrowserRouter>
        <CartContextProvider>       
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
              <Route path='/categoria/:categoria' element={<ItemCategoryContainer/>} />
              <Route path='/carrito' element={<CartWidget/>}/>
              <Route path='/*' element={<Navigate to="/" replace/>}/>
            </Routes>
        </CartContextProvider> 
      </BrowserRouter>
    </div>

  )
}

export default RoutesApp