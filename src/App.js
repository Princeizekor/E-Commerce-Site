import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Modal.css'
import './components/Product.css'
import './components/Mycart.css'
import './components/Details.css'
import Details from './components/Details';
import ErrorPage from './components/ErrorPage';
import Modal from './components/Modal';
import Mycart from './components/Mycart';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
       <Route exact path="/">
         <Products />
       </Route>
       <Route exact path="/details/:id">
         <Details />
       </Route>
       <Route exact path="/carts/:id">
         <Mycart />
       </Route>
       <Modal />
      </Switch>
      {/* <Route exact path="*">
         <ErrorPage />
       </Route> */}
    </div>
    </Router>
  );
}

export default App;
