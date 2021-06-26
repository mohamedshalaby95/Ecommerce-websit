
import {Container,Col,Row,Button,ListGroup} from 'react-bootstrap'
import Products from '../products';
import Rating from '../components/rating'
import {Link} from 'react-router-dom'
      
const Productscreen = (props) => {
   

     const select=Products.find((product)=>{
        
       return( props.match.params.id===product._id)
        
        })
        
    return (  <>
      <Container>
          <Link  to='/' className="btn btn-dark m-2">GO Back</Link>
         <Row>
            <Col sm={12} md={6} lg={4} >
                <img src={select.image} className="img-fluid" />
            </Col>
            <Col sm={12} md={3} lg={4} >
               <h1 className="my-2">{select.name}</h1>
               <Rating color='yellow' rating={select.rating} />
               <h4 className="m-2">{select.price} $</h4>
               <p> {select.description}</p>


            </Col>

            <Col sm={12} md={3} lg={4}>
            <ListGroup>
  <ListGroup.Item> <Row> <Col>Price</Col> <Col> <strong>${select.price}</strong></Col></Row> </ListGroup.Item>
  <ListGroup.Item>
      <Row>

          <Col>
          Status
          </Col>   
          <Col>
          
       <strong>{select.countInStock>0?'in stock' :'out of stock'}</strong>
          </Col>
      </Row>
      
      
       </ListGroup.Item>
  <ListGroup.Item className="d-flex justify-content-center "><Button >ADD TO CART</Button></ListGroup.Item>
  
</ListGroup>
            
            </Col>

         </Row>

      </Container>
    
    </>);
}
 
export default Productscreen;