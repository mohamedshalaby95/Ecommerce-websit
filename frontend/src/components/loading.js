
import {Spinner} from 'react-bootstrap'
import '../index.css'
const Loading = () => {
    return ( <> <div className='loading-box d-flex'>
        <Spinner  animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
       
        <h1>loading</h1>
      </div></>  );
}
 
export default Loading;