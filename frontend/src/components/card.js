import '../style/cart.css'
import {Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import {REMOVEFROMCART} from '../action/cart'

const Card = ({item}) => {
    const dispatch=useDispatch()
  
    return (  <>
     
    <Col md={4}>
    <div className='liveCard'>
            <img className="img-fluid"  src={item.image} alt="no img" />
            <div className="card__info" style={{backgroundColor:'#101820FF'}}>
                <h2 style={{color:'#F2AA4CFF'}}>{item.name}</h2>
                <hr />
                <div ><h5 style={{color:'#F2AA4CFF'}}> Quantity :<span >{item.qty}</span></h5> </div>
                <hr />
                <div ><h5 style={{color:'#F2AA4CFF'}}>Total price:<span >{(item.qty*item.price).toFixed(2)}</span></h5></div>
                <hr />
                <div><button onClick={()=>{
                dispatch(REMOVEFROMCART(item.product))
            }} className="btn btn-danger w-100"> Delete <i  className='fas fa-trash '></i> </button></div>
             </div>
          
            <div className="price d-flex justify-content-center align-items-center"><span>{item.price}</span></div>
           
        </div>
        
        </Col>
    
    </> );
}
 
export default Card; 




