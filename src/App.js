import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Styles/Modal.css'
import './Styles/Product.css'
import './Styles/Mycart.css'
import './Styles/Details.css'
import Details from './Pages/Preview/Details';
import ErrorPage from './Pages/ErrorPage';
import Modal from './components/Modal';
import Mycart from './Pages/Cart/Mycart';
import Navbar from './components/Navbar';
import Products from './Pages/Shop/Products';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import Shopcontent from './Context/shop-content';

function App() {
  return (
      <div className="App">
        <Shopcontent>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
            <Modal />
          <Route exact path="*">
         <ErrorPage />
       </Route>
        </Switch>
        </Router>
        </Shopcontent>
      </div>
  );
}

export default App;
