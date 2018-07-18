//TEN PLIK ZAWIERA GLOWNEGO REDUCERA - wywolanie funkcji dispatch powoduje,
//ze wlasnie ten reducer zostaje wywolany - przekazuje on dalej akcje do swoich dzieci :)

//reducer to funkcja, ktora przy KAZDEJ akcji zostanie kopnieta w tylek
//przez glownego reducera (combineReducer - wywoluje sie przy kazdym dispatchu)
//jesli jest ustawiony jakis middleware, to zostanie wywolany przed reducerem

//reducer sprawdza co to za akcja (jej typ) i na tej podstawie zmienia stan glownego store'a
//jesli zadna akcja nie pasuje do tej opisanej w reducerze, to reducer zwroci stan niezmieniony :)
import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import {loadingBarReducer} from 'react-redux-loading'


export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
