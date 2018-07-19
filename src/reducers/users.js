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

//UWAGA: w reducerze "state" oznacza tylko FRAGMENT store'a Reduxowego (tu: tylko users), nie caly Store!

import {RECEIVE_USERS, USER_UPDATE, USER_UPDATE2} from '../actions/users'

export default function users (state = {}, action){
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case USER_UPDATE: // it predicts API update 
      return {
        ...state,
        [action.q["author"]]: {
          ...state[action.q["author"]],
          questions: state[action.q["author"]].questions.concat(action.q["id"])
        }
      }
    case USER_UPDATE2:
      return{
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]:action.answer
          }
        }
      }
      
    default:
      return state
  }
}