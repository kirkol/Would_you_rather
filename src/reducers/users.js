//reducer to funkcja, ktora przy KAZDEJ akcji zostanie kopnieta w tylek
//przez glownego reducera (combineReducer - wywoluje sie przy kazdym dispatchu)
//jesli jest ustawiony jakis middleware, to zostanie wywolany przed reducerem

//reducer sprawdza co to za akcja (jej typ) i na tej podstawie zmienia stan glownego store'a
//jesli zadna akcja nie pasuje do tej opisanej w reducerze, to reducer zwroci stan niezmieniony :)

//zapis:
//...state,
//...action.users
//to po prostu dodanie nowego atrybutu (...action.users) do juz istniejacych w state (...state)
//to jak polaczenie arrayow wlasciwie (tylko tu na obiekcie), np.
//let cold = ['a', 'b']
//let hot = ['c', 'd']
//let all = [...cold, ...hot] -> ['a', 'b', 'c', 'd']

import {RECEIVE_USERS} from '../actions/users'

export default function users (state = {}, action){
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}