import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import Header from './components/header'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Footer from './components/footer'
import Homescreen from './screen/homescreen'
import Cartscreen from './screen/cartscreen'
import Productscreen from './screen/prodcutscreen'
import Reduxthunk from 'redux-thunk'
import reducer from './reducer/index'
import Login from './screen/loginscreen'
import Register from './screen/registerscreen'
import Profile from './screen/profilescreen'
import Notfound from './components/notfound'
import Shippingscreen from './screen/shippingscreen'
import PaymentMethod from './screen/paymentmethod'
import PlaceOrder from './screen/placeorderscreen'
import Order  from './screen/orderscreen'

const cartItemsFromStroge = localStorage.getItem('cartitems')
  ? JSON.parse(localStorage.getItem('cartitems'))
  : []
const userInfFromStroge = localStorage.getItem('userInf')
  ? JSON.parse(localStorage.getItem('userInf'))
  : null
const shippingFromStroge = localStorage.getItem('shippingData')
  ? JSON.parse(localStorage.getItem('shippingData'))
  : {}

  const paymentMethodFromStroge = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {
  cart: { cartitems: cartItemsFromStroge, shippingData: shippingFromStroge,paymentMethod:paymentMethodFromStroge },
  userLogin: { userInf: userInfFromStroge },

}
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(Reduxthunk))
)
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <main>
            <Container className='mt-3'>
              <Switch>
                <Redirect from='/home' to='/' />
                <Route path='/' component={Homescreen} exact />
                <Route path='/product/:id' component={Productscreen} />

                <Route path={`/cart/:id?`} component={Cartscreen} />
                <Route path={`/login`} component={Login} />
                <Route path={'/register'} component={Register} />
                <Route path={'/profile'} component={Profile} />

                <Route path='/shipping' component={Shippingscreen} />
                <Route path='/payment' component={PaymentMethod} />
                <Route path='/placeorder' component={PlaceOrder} />
                <Route path='/order/:id' component={Order} />
                <Route path='/notfound' component={Notfound} />

                <Redirect to='/notfound' />
              </Switch>
            </Container>
          </main>
          <div className=' d-flex p-5 justify-content-center'>
            {' '}
            <Footer />{' '}
          </div>
        </Router>
      </Provider>
    </>
  )
}

export default App
