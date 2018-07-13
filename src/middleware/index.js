import thunk from 'redux-thunk'
import logger from './logger'
import {applyMiddleware} from 'redux'

//UWAGA to plik zawierajacy WSZYSTKIE middlewary
//WAZNE: middlewary powinny byc wypisane w kolejnosci:
//thunk,
//...jakies middlewary
//logger

//THUNK to middleware pozwalajacy, zeby action creator zwrocil nam funkcje, a nie zwykly obiekt
//działa tak, że jeśli widzi zwykłą akcję (która jest obiektem), to przekazuje ją
// kolejnemu middleware’owi (next). Jeśli jednak zobaczy funkcję, to wywołuje ją 
//(zwykle to funkcje pobierające dane z API) i z tej funkcji zwracane są akcje. 
//Thunk znowu sprawdza, czy zwracane akcje są obiektami, czy funkcjami i będzie to powtarzał 
//aż wszystkie akcje będą obiektami - te przekaże do kolejnych middleware’ów.

export default applyMiddleware(
  thunk,
  logger
)