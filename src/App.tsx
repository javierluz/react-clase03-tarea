import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './containers/home/Home';
import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
