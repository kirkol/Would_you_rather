import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import middleware from './middleware'

//TO KOD PRZEKOPIOWANY Z https://www.npmjs.com/package/redux-persist
//to biblioteka podtrzymujaca glowny Store Reduxa
//bez niej, przy odswiezaniu stronki (refresh przegladarki) Store sie zeruje - tj. przechodzi przez App.js i tyle, reszty nie pamieta

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import reducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
// persistor.purge() - UZYC TEGO POZNIEJ - czysci store zapisany przez przegladarke do zera!

// store to nasz glowny store calej apki - tam przechowywane sa stany wszystkich komponentow
// Provider to komponent z biblioteki Reduxa
// otacza caly komponent App i dzieki temu wszystko co jest w srodku moze miec 
// dostep do store'a za pomoca funkcji connect (jesli w komponencie jest funkcja connect, wtedy komponent jest podlaczony do store'a)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
