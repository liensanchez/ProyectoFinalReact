import React, { useState } from 'react'
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore'
import { useCartContext } from '../Context/cartContext';


function CartForm() {

  const [formData, setformData] = useState({  
    name: '', telephone:'', mail:'', mail2:''
  })


    const setData = (event) => {
      setformData({
        ...formData,
        [event.target.name]: event.target.value
     })
    }

    function mailComprobation () {
      let mail = formData.mail
      let mail2 = formData.mail2

      if (mail !== mail2) {
        alert('error')
      }
    }

  const [infoId, setinfoId] = useState('')

  const {cartList, total} = useCartContext()

  const generateOrder = async (e) =>{  

  let mail = formData.mail
  let mail2 = formData.mail2

  if (mail !== mail2) {
    alert('error no coincide el correo')
  }

  let order = {}

  order.comprador =  formData
  order.total = total

  order.products = cartList.map(items=>{
    const id = items.id 
    const name = items.name
    const cantidad = items.cantidad
    const precio = items.precio * items.cantidad

    return {id,name,precio, cantidad}
    
  })
  
  const db = getFirestore ()
  const queryCollection = collection(db, 'ordenes')
  addDoc(queryCollection, order)
  .then(resp=> setinfoId(resp.id))
  


  const queryColeccion = collection(db, 'productos')

  const queryActualizar =  query(
    queryColeccion,
    where(documentId(), 'in', cartList.map(it=>it.id))
  )

  const batch = writeBatch(db)

  await getDocs(queryActualizar)
  .then(resp=> resp.docs.forEach(res=>batch.update(res.ref,{
    stock:res.data().stock-cartList.find(item=>item.id===res.id).cantidad
  })))
  }


  return (      
        <>
        <form >
          <h3>Ingrese su nombre</h3>
          <input type="text" placeholder='Juan' name='name'  onChange={setData} value={formData.name}/><br />
          <h3>Ingrese su Telefono</h3>
          <input type="phone" placeholder='2613256748' name='telephone'  onChange={setData} value={formData.telephone}/><br />
          <h3>Ingrese su correo</h3>
          <input type="text" placeholder='mail@mail.com' name='mail'  onChange={setData} value={formData.mail}/><br />
          <h3>Confirme su correo</h3>
          <input type="text" placeholder='mail@mail.com' name='mail2'  onChange={setData} value={formData.mail2}/><br />
        </form>
        <button onClick={generateOrder} className="btn btn-success">Enviar order</button>
        {infoId.length !== '' && `Su codigo de compra es: ${infoId}`}
        </>
    )
}

export default CartForm