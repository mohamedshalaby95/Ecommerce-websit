
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import {ADDTOCART,REMOVEFROMCART} from '../action/cart'
import {Row,Col,ListGroup,Image,Button} from 'react-bootstrap'

const Cartscreen = ({match,history,location}) => {

const productId=match.params.id
console.log(productId)
const qty=location.search? Number (location.search.split('=')[1]):1
const dispatch=useDispatch()
const cart=useSelector((state) => state.cart)
const{cartitems}=cart
console.log(cartitems)
useEffect(()=>{
    if(productId){
        dispatch(ADDTOCART(productId,qty))
    }
},[dispatch,qty,productId])
const handelRemoveForCart=(id)=>{
dispatch(REMOVEFROMCART(id))
}

    return (<> 
    <Row>
     <Col md={8}>
         <h1>Shoping Cart</h1>
         {cartitems.length===0?<h1 className="t-center  "> your cart is emty <Link  className="btn btn-primary" to='/'> GO BACK</Link></h1>:(
             <ListGroup variant='flush'>
                  {cartitems.map((item)=> (
                          <ListGroup.Item key={item.product}>
                              <Row>
                                  <Col md={2}>
                                      <Image src={item.image} alt={item.name} fluid rounded/>
                                  </Col>
                                  <Col md={3}>
                                      <h5>{item.name}</h5>
                                  </Col> 
                                  <Col md={2}>
                                      {item.price}
                                  </Col>
                                  <Col md={2}>
                                  <select  className="px-2 bg-silver" value={item.qty} onChange={(e)=>{ dispatch(ADDTOCART(item.product,e.target.value))}}>
   {[...Array(item.countInStock).keys()].map( i => ( <option key={i+1} value={i+1}>{i+1}</option> ))}
     
  
   </select>
                                  </Col>
                                  <Col md={2}>
                                      <Button onClick={ ()=> handelRemoveForCart(item.product)} type="button" variant="light"> <i className='fas fa-trash'></i></Button>
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                      )
                  )}
             </ListGroup>
         )}

     </Col>
     <Col md={4}>
        <ListGroup>
            <ListGroup.Item>
               
                <h3>subtotal(<span style={{color:"red"}}>{cartitems.reduce((acc,item) => acc+item.qty,0)}</span>) items</h3>
                <h3>Totals Price(<span style={{color:"red"}}>{cartitems.reduce((acc,item) => acc+(item.price)*item.qty,0).toFixed(2)}</span>) </h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button type='button' className='btn-block w-100' disable={cartitems.lenght===0} >Proceed To Checkout</Button>
            </ListGroup.Item>
        </ListGroup>

     </Col>
     

    </Row>
     </>  );
}
 
export default Cartscreen;