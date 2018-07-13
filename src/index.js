import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

// store to nasz glowny store calej apki - tam przechowywane sa stany wszystkich komponentow
// Provider to komponent z biblioteki Reduxa
// otacza caly komponent App i dzieki temu wszystko co jest w srodku moze miec 
// dostep do store'a za pomoca funkcji connect (jesli w komponencie jest funkcja connect, wtedy komponent jest podlaczony do store'a)

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);
