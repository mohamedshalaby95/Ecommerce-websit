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
            
            // <ListGroup variant='flush'>
            //   {cartitems.map((item) => (
            //     <ListGroup.Item key={item.product}>
            //       <Row>
            //         <Col md={2}>
            //           <Image src={item.image} alt={item.name} fluid rounded />
            //         </Col>
            //         <Col md={3}>
            //           <h5>{item.name}</h5>
            //         </Col>
            //         <Col md={2}>{item.price}</Col>
            //         <Col md={2}>
            //           <select 
            //             className='px-2 bg-silver'
            //             value={item.qty}
            //             onChange={(e) => {
            //               dispatch(ADDTOCART(item.product, e.target.value))
            //             }}
            //           >
            //             {[...Array(item.countInStock).keys()].map((i) => (
            //               <option key={i + 1} value={i + 1}>
            //                 {i + 1}
            //               </option>
            //             ))}
            //           </select>
            //         </Col>
            //         <Col md={2}>
            //           <Button
            //             onClick={() => handelRemoveForCart(item.product)}
            //             type='button'
            //             variant='light'
            //           >
            //             {' '}
            //             <i className='fas fa-trash'></i>
            //           </Button>
            //         </Col>
            //       </Row>
            //     </ListGroup.Item>
            //   ))}
            // </ListGroup>
          )}
        </Col>
        <Col md={3} className= {alignItem}  >
          <ListGroup   >
            <ListGroup.Item style={{backgroundColor:'#F2AA4CFF',color:' #101820FF'}}>
              <p  >
                subtotal(
                <span  >
                  {cartitems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
                ) items
              </p>
              <p>
                Totals Price(
                <span >
                  {cartitems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </span>
                ){' '}
              </p>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'#101820FF',color:' #F2AA4CFF'}}>
              <Button
                onClick={() => {
                  history.push('/login?redirect=shipping')
                }}
                type='button'
                className='btn-block w-100'
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
