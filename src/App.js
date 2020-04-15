import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/new" component={NewProduct} />
          <Route exact path="/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
