import { useDispatch, useSelector } from 'react-redux'
import CartEmpty from '../components/cartempty'
import { useEffect } from 'react'
import { ADDTOCART, REMOVEFROMCART } from '../action/cart'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import Card from '../components/card'


const Cartscreen = ({ match, history, location }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartitems } = cart




  useEffect(() => {
    if (productId) {
      dispatch(ADDTOCART(productId, qty))
    }
  }, [dispatch, qty, productId])
  const handelRemoveForCart = (id) => {
    dispatch(REMOVEFROMCART(id))
  }
    const backGround=cartitems.length === 0 ?'background':''
    const alignItem=cartitems.length === 0 ?'align-items-center':''
  return (
    <div className={backGround}>
       <h1 className="m-5 text-center">Shoping Cart</h1>
      <Row >
        <Col md={9}>
         
        
          {cartitems.length === 0 ? (<CartEmpty /> ) : (
             <Row>
         
            {cartitems.map((item)=> (<Card item={item} />))}
            </Row>
        
          )}
        </Col>
        <Col md={3} className= {alignItem}  >
          <ListGroup   >
            <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:' #101820FF'}}>
              <p  >
               Items: {''}
                <span  >
                  {cartitems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
                
              </p>
             
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'#101820FF',color:' #F2AA4CFF'}}>
            <p>
                Totals Price: {''}
                <span >
                  {cartitems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </span>
                {' '}
              </p>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:'#101820FF '}}>
              <Button
                onClick={() => {
                  history.push('/login?redirect=shipping')
                }}
                type='button'
                className='btn w-100 '
                disabled={cartitems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Cartscreen
