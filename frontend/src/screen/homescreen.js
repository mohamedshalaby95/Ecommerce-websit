import products from '../products'
import Product from '../components/product'
import { Col,Row } from 'react-bootstrap'

const Homescreen = () => {


   

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