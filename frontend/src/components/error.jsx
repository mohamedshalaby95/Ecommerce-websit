import '../style/error.css'
import {Link} from 'react-router-dom'

const Error = ({error,history}) => {
    return (<>
       <div className="error_container">
           <div >
               <h1 className="error_heading">oops</h1>
               <h3 classname="error_caption">some thing go wrong</h3>
               <div className="error">{error}</div>
               <Link  to="/" className="btn  btn-danger"> Go Home</Link>
           </div>
       </div>
<div class="astronaut ">
  <img src="../images/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="animation-photo"  />
</div>
    
    
    </>  );
}
 
export default Error;