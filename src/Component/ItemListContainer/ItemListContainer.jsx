import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import {CardGroup} from 'react-bootstrap';


function ItemListContainer() {

     const [products, setproducts] = useState([])    

    useEffect(()=>{
      const querydb = getFirestore()
      const queryCollection = collection( querydb, 'productos')
      getDocs(queryCollection)
      .then(resp=> setproducts(resp.docs.map(items=>({id: items.id, ...items.data()}))))
    },[])
    
  return (
    <>      
      <CardGroup className='p-5'>
        <ItemList products={products} />
      </CardGroup >        
   </>
  )}

export default ItemListContainer