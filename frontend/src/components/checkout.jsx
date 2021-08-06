import { Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Checkout = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <Nav className='justify-content-center w-100%'>
        <Nav.Item>
          {step1 ? (
            <Nav.Link as={Link} to='/register'>
              SING IN
            </Nav.Link>
          ) : (
            <Nav.Link disabled>SING IN</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            <Nav.Link as={Link} to='/shipping'>
              SHIPPING
            </Nav.Link>
          ) : (
            <Nav.Link disabled>SHIPPING</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <Nav.Link as={Link} to='/payment'>
              Payment
            </Nav.Link>
          ) : (
            <Nav.Link disabled>PAYMENT</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <Nav.Link as={Link} to='/placeorder'>
              PLACE ORDER
            </Nav.Link>
          ) : (
            <Nav.Link disabled>PLACE ORDER</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Checkout
