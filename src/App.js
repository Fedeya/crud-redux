import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

// Views

import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';


// Redux

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
