import { Container, Col, Row, Button, ListGroup,Form} from 'react-bootstrap'

import Rating from '../components/rating'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {FETCH_PRODUCT} from '../action/product'


const Productscreen = ({match,history}) => {
  
const [qty,setQty]=useState(1)
const product=useSelector((state)=> state.products[match.params.id])

const dispatch=useDispatch()
useEffect(()=>{

  dispatch(FETCH_PRODUCT(match.params.id))
},[dispatch,qty])


  return (
    <>
    {product==undefined?<h1>loading</h1>:(
       <Container>
       <Link to='/' className='btn btn-dark m-2'>
         GO Back
       </Link>
       <Row>
         <Col sm={12} md={6} lg={4}>
           <img src={product.image} className='img-fluid' />
         </Col>
         <Col sm={12} md={3} lg={4}>
           <h1 className='my-2'>{product.name}</h1>
           <Rating color='yellow' rating={product.rating} />
           <h4 className='m-2'>{product.price} $</h4>
           <p> {product.description}</p>
         </Col>

         <Col sm={12} md={3} lg={4}>
           <ListGroup>
             <ListGroup.Item>
               {' '}
               <Row>
                 {' '}
                 <Col>Price</Col>{' '}
                 <Col>
                   {' '}
                   <strong>${product.price}</strong>
                 </Col>
               </Row>{' '}
             </ListGroup.Item>

             {product.countInStock>0 &&(

<ListGroup.Item>
<Row>
 <Col><strong>Status</strong></Col>
 <Col>
   <select  className="px-2 bg-silver" value={qty} onChange={(e)=>{ setQty(e.target.value)}}>
   {[...Array(product.countInStock).keys()].map( i => ( <option key={i+1} value={i+1}>{i+1}</option> ))}
     
  
   </select>
  
 </Col>
</Row>
</ListGroup.Item>
             )}

             <ListGroup.Item className='d-flex justify-content-center  '>
               <Button onClick={()=>{
                 history.push(`/cart/${product._id}?qty=${qty}`)
               }}  disabled={product.countInStock==0}>ADD TO CART</Button>
             </ListGroup.Item>
           </ListGroup>
         </Col>
       </Row>
     </Container>
    )}
     
    </>
  )
}

export default Productscreen
