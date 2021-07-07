import {Navbar,Container, Nav} from 'react-bootstrap'



import {Link} from 'react-router-dom'
const Header = () => {
    return (
    
    <> 

<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    
    <Navbar.Brand as={Link} to='/'>SHOP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav className=" ml-auto">
        
           
       <Nav.Link as={Link}  to='/cart'><i class="fas fa-shopping-cart"></i> CART
            </Nav.Link>
           
        <Nav.Link href="#link"><i class="fas fa-user"></i> SIGN IN</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>  );
}
 
export default Header;