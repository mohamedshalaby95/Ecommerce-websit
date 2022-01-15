import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderDetails } from '../action/orderdetails'
import Loading from '../components/loading'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
 import { Col, Row,Card,Button } from 'react-bootstrap'
import { PayPalButton } from "react-paypal-button-v2";
import Error from '../components/error'

const Order = ({ match }) => {
  const order = useSelector((state) => state.orderDetails)
  const { error, loading, data } = order

 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(orderDetails(match.params.id))
  }, [])

  return (
    <>
      {loading && <Loading />}
      {error?<Error error={error} />:""}
      <div>
        <Row>
          <Col >
          <h1 className="text-center">Order Items</h1>
            <Table className=" bg-dark table">
            
              <Thead className="text-center">
                <Tr>
                  <Th>#</Th>
                  <Th  >Product Image</Th>
                  <Th >Product Name</Th>
                  <Th>Product Price</Th>
                  <Th>Product quantity</Th>
                </Tr>
              </Thead>

              {data === undefined ? (
                <Loading />
              ) : (
                <Tbody className="text-center">
                  {data.orderitems.map((item, i) => (
                    <Tr key={item._id}>
                      <Td>{++i}</Td>
                      <Td >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ height: '50px' }}
                          className='img-fluid'
                        />
                      </Td>
                      <Td>{item.name}</Td>
                      <Td>{item.price}</Td>
                      <Td>{item.qty}</Td>
                    </Tr>
                  ))}
                </Tbody>
              )}
            </Table>
          </Col>

        
        </Row>
        <Row >
          
        <Col className="mt-5 m-auto   " sm={12} md={4}  >

<Card>
<Card.Header  style={{backgroundColor:'#F2AA4CFF',color:'#101820FF'}}>Tottal Price:{data?data.totalPrice:""}</Card.Header>
<Card.Body style={{backgroundColor:'#101820FF',color:'#F2AA4CFF'}}>
<Card.Text >
{data&&data.ispayed?(<span ><strong style={{fontSize:'1.5rem'}}>Pay status: &nbsp;<i class="fas fa-check"></i> </strong></span>):(<span><strong style={{fontSize:'1.5rem'}}>Pay status:  &nbsp; <i style={{color:'red'}} class="fas fa-times "></i></strong></span>)}
</Card.Text>
<Card.Text >
{data&&data.isDelivered?(<span ><strong style={{fontSize:'1.5rem'}}>Deliverd Status: &nbsp;<i class="fas fa-check"></i> </strong></span>):(<span><strong style={{fontSize:'1.5rem'}}>Deliverd Status:  &nbsp; <i style={{color:'red'}} class="fas fa-times "></i></strong></span>)}
</Card.Text>
</Card.Body>
</Card>
<div>
<PayPalButton />
</div>
</Col>
        </Row>
      </div>
    </>
  )
}

export default Order
