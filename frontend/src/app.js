import React from 'react';
import { Provider} from 'react-redux'
import { applyMiddleware,createStore,compose} from 'redux'
import Header from './components/header'
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Footer from './components/footer';
import Homescreen from './screen/homescreen'
import Cartscreen from './screen/cartscreen'
import Productscreen from './screen/prodcutscreen'
import Reduxthunk from 'redux-thunk';
import reducer from './reducer/index'
import Login from './screen/loginscreen'


const cartItemsFromStroge=localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems')):[]
//const userInfFromStroge=localStorage.getItem('userInf')?JSON.parse(localStorage.getItem('userInf')):null

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState={
  cart:{cartitems:cartItemsFromStroge},
  userLogin:{userInf:""},
}
const store=createStore(reducer,initialState,composeEnhancers(applyMiddleware(Reduxthunk)))
const App = () => {
    return (
      <>
      <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Container className="mt-3">
              <Switch>
                 <Route path='/' component={Homescreen}  exact/>
                 <Route path='/product/:id' component={Productscreen} />   
                 
                  <Route path={`/cart/:id?`} component={Cartscreen} /> 
                  <Route path={`/login`} component={Login} /> 

              </Switch>
               
                
          
          </Container>
        </main>
        < div className=" d-flex p-5 justify-content-center"> <Footer/> </div>
        </Router>
        </Provider>
      </>

    )
}
  

export default App























