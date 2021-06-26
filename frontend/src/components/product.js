import {Card} from 'react-bootstrap'
import Rating from './rating';
import {Link} from 'react-router-dom'

const Product = ( {product}) => {
    
    return (
      <>
      
        <Card style={{ width: '18rem' }}>
        <Link to={`product/${product._id}`}>
          <Card.Img variant='top' className="p-2" src={product.image} />
          </Link>
         
          <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
             {`${product.rating} from ${product.numReviews}`}
            </Card.Text>
            <div className="m-1"> <Rating  rating={product.rating} color='yellow'/></div>
            </Link>
            <h3>{` $ ${product.price}`}</h3>
               
          </Card.Body>
        </Card>
        
      </>
    
    )
}
 
export default Product;