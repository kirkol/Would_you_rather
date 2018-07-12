//reducer to funkcja, ktora przy KAZDEJ akcji zostanie kopnieta w tylek
//przez glownego reducera (combineReducer - wywoluje sie przy kazdym dispatchu)
//jesli jest ustawiony jakis middleware, to zostanie wywolany przed reducerem

//reducer sprawdza co to za akcja (jej typ) i na tej podstawie zmienia stan glownego store'a
//jesli zadna akcja nie pasuje do tej opisanej w reducerze, to reducer zwroci stan niezmieniony :)

import {SET_AUTHED_USER} from '../actions/authedUser'

export default function authedUser(state = null, action){
  switch(action.type){
    case SET_AUTHED_USER:
      return action.id
    default :
      return state
  }
}