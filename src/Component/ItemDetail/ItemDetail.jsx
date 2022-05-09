import { useCartContext } from '../Context/cartContext'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({productOne}) {

  const {addToCart} = useCartContext()


  function onAdd(cant) {
    addToCart( { ...productOne, cantidad: cant } )
  }



  return (
    <>

      <div className='col-md-4 p-1' key={productOne.id}>
        <div className="card w-50 mt-5" >
          <div className='card-header'>
            {`${productOne.name}`}
          </div>
          <div className='card-body'>
            <img src={productOne.img} className="img-fluid" alt="" />
          </div>
          <div className='card-footer'>
              <ItemCount initial={productOne.initial} onAdd={onAdd} stock={productOne.stock} identification={`${productOne.id}`} />
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemDetail
