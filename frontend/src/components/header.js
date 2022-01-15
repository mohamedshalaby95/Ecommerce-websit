
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap'
import {userLogout} from '../action/userlogin'



import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const Header = () => {

  
   const user=useSelector((state)=> state.userLogin)
  const dispatch=useDispatch()
 
  const{userInf}=user
  

  const handelLogOut=()=>{
dispatch(userLogout())
  }

  
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
           
        {userInf? 
        <NavDropdown title={userInf.name}>

          <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={ handelLogOut}>log out</NavDropdown.Item>
        </NavDropdown>
: <Nav.Link as={Link}  to='/login'><i class="fas fa-user"></i> SIGN IN</Nav.Link>}
       
        
      </Nav>
           
           {/* admin start */}
           <Nav className=" ml-auto">
        
           
        
            
         {userInf && userInf.isAdmin? 
         <NavDropdown title={"Admin"}>
 
           <NavDropdown.Item as={Link} to='/admin/users'>Users</NavDropdown.Item>
           <NavDropdown.Item as={Link} to='/admin/admins'>Admins controll</NavDropdown.Item>
           <NavDropdown.Item onClick={ handelLogOut}>log out</NavDropdown.Item>
         </NavDropdown>
 : ""}
        
         
       </Nav>


{/* admin end */}
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>  );
}
 
export default Header;