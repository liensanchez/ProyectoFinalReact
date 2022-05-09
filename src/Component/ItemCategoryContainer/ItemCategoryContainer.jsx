import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from '../ItemCategory/ItemCategory'
import { collection,query, where, getDocs, getFirestore} from 'firebase/firestore';
import { CardGroup } from 'react-bootstrap';


function ItemCategoryContainer() {
  const [product, setproduct] = useState([])

  const {categoria} = useParams()


  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    const queryFilter = query(queryCollection, 
 
      where('categoria','==', categoria),            

  )

    getDocs(queryFilter)
    .then(resp=> setproduct(resp.docs.map(items=>({id: items.id, ...items.data()}))))
  },[categoria])

  return (
    <>
    <CardGroup className='p-5'>
      <ItemCategory productsCategory={product}/> 
    </CardGroup>      
    </>

  )

}


export default ItemCategoryContainer