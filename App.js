import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { ShopConnector } from './shop/ShopConnector';
import { SportsStoreReducer } from './data/DataStore';

function App() {
  return <Provider store={SportsStoreReducer} >
    <Router>
      <Route path="/" component={ShopConnector} />
    </Router>
  </Provider>
}

export default App;
