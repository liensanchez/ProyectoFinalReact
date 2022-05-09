import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Css/App.css'


function Item({product}) {

  return (

    <>
      <div className='col-4 p-1 '>
      <div className="card mt-5 w-50" >
        <div className='d-flex flex-column align-items-center'>
          <div className='card-header'>
          {`${product.name}`} 
          </div>
          <div className='card-body'>
            <img src={product.img} className="img-fluid" alt="" />
          </div>
          <div className='card-footer'>
            $ {`${product.precio}`} 
          </div>
          <div className='card-footer'>
            <Link to={`/detalle/${product.id}`}> 
                <Button className='btn'>Detalle</Button>
            </Link>
          </div>
        </div>  
      </div>
    </div>
    </>
    

  )

}


export default Item