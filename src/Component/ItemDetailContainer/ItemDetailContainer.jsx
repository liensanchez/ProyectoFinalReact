import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CardGroup } from 'react-bootstrap';


function ItemDetailContainer() {
  const [product, setproduct] = useState([])



  const {id} = useParams()

  useEffect(()=>{
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'productos', id)
    getDoc(queryProd)
    .then(resp=> setproduct({id: resp.id, ...resp.data()}))
  },[])

  return (
    <>
    <CardGroup className='p-5 d-flex justify-content-center'>
      <ItemDetail  productOne={product}/>     
    </CardGroup>  
    </>

  )

}


export default ItemDetailContainer