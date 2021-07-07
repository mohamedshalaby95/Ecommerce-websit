
import Product from '../components/product'
import { Col,Row } from 'react-bootstrap'
import { FETCH_PRODUCTS } from '../action/product'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Homescreen = () => {

const dispatch=useDispatch()
   const products=useSelector((state) =>
  
      Object.values(state.products)
   )
 
   useEffect(()=>{

     dispatch(FETCH_PRODUCTS())

   },[dispatch])

    return ( 
     <>
     

     <Row>
         {products.length==0 &&<div> No product to view</div>}
     {products.map((product) =>{
        
       
         return( <Col className="my-2" sm={12} md={6} lg={4} xl={3}><Product product={product} /></Col>)
     })

     

     }
         
     </Row>
    
  
      
     
     
     </>)
  
}

 
export default  Homescreen;