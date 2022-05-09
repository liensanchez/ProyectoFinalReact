import Item from '../Item/Item'

const ItemCategory =  
({ productsCategory }) => { 
   
    return (
        <>
            {productsCategory.map((product)=>   <Item key={product.id} product={product} /> )}
        </>
    )
}  

export default ItemCategory