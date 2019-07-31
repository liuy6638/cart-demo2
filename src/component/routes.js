import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './home'
import Cart from './cart'
import Order from './order'
import SimpleFade from './mine'
import Footbar from "./footbar";
const history = createBrowserHistory();
const Routes = () => (
    <Router history={history}>
      <div>
        <Footbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component = {Cart}/>
          <Route path="/order" component = {Order}/>
          <Route path="/mine" component = {SimpleFade}/>
        </div>
      </div>     
    </Router>
)

export default Routes