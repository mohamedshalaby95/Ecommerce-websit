import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import Card from '../components/card'
import CartEmpty from '../components/cartempty'
import  {Order} from '../action/order'
import Loading from '../components/loading'
const Placeorder = ({ history }) => {
  
  const cart = useSelector((state) => state.cart)
  
  
  const order=useSelector((state) => state.order)
  const {data,loading,error}=order
 
   const dispatch=useDispatch()

    cart.itemsPrice= cart.cartitems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2)
      cart.shippingPrice=cart.shippingData.adress==='cairo'?0.00:100
      cart.tax=cart.itemsPrice>1000?(.5*cart.itemsPrice).toFixed(2):0.00

     cart.totalPrice=(Number(cart.itemsPrice)+Number(cart.tax)+Number(cart.shippingPrice)).toFixed(2)
    
   

      useEffect(()=>{
        if(data){
          history.push(`order/${data.data._id}`)
        }
      

      },[data,history])
      
    


  return (
    <> <div >
      {loading ?<Loading />:''}
      <div  >
        <Row>
          {cart.cartitems && cart.cartitems.length > 0
            ?  cart.cartitems.map((item) => <Card item={item} />)
            : <CartEmpty />}
        </Row>
      </div>
      </div>
      <div className="m-5 background p-5">
        <Row>
        <Col md={2}></Col>  
          <Col md={4}>
            <img
              src='images/order-icon-300x300.png'
              className='img-fluid'
              alt='image-loading'
            />
          </Col>
        

          <Col md={4}>
            <div style={{backgroundColor:'#101820FF'}} >
            <ListGroup >
            
              <ListGroup  >

                {error && <ListGroup.Item>
                  
                   {error}
                  
                  </ListGroup.Item>}
                <ListGroup.Item style={{backgroundColor:'#101820FF',color:'#F2AA4CFF'}}>
                   Items : {''}
                      <span>
                    
                    {  cart.itemsPrice}
                  
                 </span>
                  
              
                
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:' #101820FF'}}>
                Shipping Price : {''}
                  <span>
                    { cart.shippingPrice}
                   
                  </span>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#101820FF',color:'#F2AA4CFF'}}>
                Tax : {''}
                  <span>
                    { cart.tax}
                   
                  </span>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:' #101820FF'}}>
                Total Price : {''}
                  <span>
                    {cart.totalPrice}
                   
                  </span>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#101820FF',color:' #F2AA4CFF'}}>
                Shipping Adress : {''}
                  <span>
                    {` ${cart.shippingData.address} /${cart.shippingData.country}`}
                   
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:' #101820FF'}}>
                <span></span>
                <Button
                  
                  type='button'
                  className='btn-block w-100'
                  disable={cart.cartitems.lenght === 0}
                  onClick={()=>{
                  
                    dispatch(Order({
                      orderitems:cart.cartitems,
                      shippingAdress:cart.shippingData,
                      paymentMethod:cart.paymentMethod,
                      taxPrice:cart.tax,
                      shippingPrice:cart.shippingPrice,
                      totalPrice:cart.totalPrice



                    }))
                  }}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
            </div>
          </Col>
          <Col md={2}></Col>  
        </Row>
      </div>
    </>
  )
}

export default Placeorder
