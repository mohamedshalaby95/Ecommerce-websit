import Checkout from '../components/checkout'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import { SavePaymentMethod} from '../action/cart'
import {useDispatch,useSelector} from 'react-redux'

const PaymentMethod = ({history}) => {
  const [paymentMethod,setpaymentMethod]=useState('')
  const dispatch=useDispatch()
  const handelSubmit = (e) => {
    e.preventDefault()
   
    dispatch(SavePaymentMethod(paymentMethod))
    history.push('/placeorder')
    

  }

  return (
    <>
      <div>
        <Checkout step1 step2 step3 />
      </div>
      <div className=' m-5'>
        <Row>
          <Col sm={12} md={6}>
            <img
              className='img-fluid'
              src='/images/paymentImage2021-08-04 140525.png'
              alt='paymentimage'
            />
          </Col>
          <Col sm={12} md={6}>
            <form onSubmit={handelSubmit}>
              <Form.Group>
                <h2 className=' mb-4 mt-3 '> Payment Method</h2>
                <Form.Label className='mt-5 '>Select method</Form.Label>

                <Form.Check
                  type='radio'
                  label='PayPal Or CreditCart '
              
                  name='paymentMethd'
                  id='payPal'
                  value='paypal'
                  onChange={(e)=>{
                    setpaymentMethod(e.target.value)
                  }}
                />
                <Form.Check
                  type='radio'
                  label='Visa '
                  name='paymentMethd'
                  id='Visa'
                  value='visa'
                  onChange={(e)=>{
                    setpaymentMethod(e.target.value)
                  }}
                />
              </Form.Group>
                <div className=' mt-5 d-flex justify-content-end'>     <Button  disabled={paymentMethod===''} type='submit' variant='primary'>continue</Button></div>
         
            </form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PaymentMethod
