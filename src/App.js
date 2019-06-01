import React from 'react';

import store from './store';
import { Provider } from 'react-redux';

import Products from './components/Products';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import Navbar from './components/Navbar';

import EditProduct from "./components/EditProduct";

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/productos/nuevo" component={NewProduct} />
              <Route path="/productos/edit/:id" render={(props)=>{ 
                return <EditProduct id={props.match.params.id}></EditProduct>
              }}>
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
          {/* <Productos /> */}
        
      </Provider>
    );
  } 
}

export default App;
