import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

//gdy user zaloguje sie juz na stronce,
//to wywoluje sie handleInitialData, ktora tak naprawde wywoluje funkcje getInitialData
//ktora pobieramy z api.js
//getInitialData sklada sie z dwoch funkcji _getUsers i _getQuestions (sa w api.js), ktore zwracaja po Promisie
//kazdy z tych Promisow, jezeli uda sie polaczyc z baza (tu musi, bo tak naprawde nie ma zadnej bazy, tylko jest plik z danymi xD)
//zwroci obiekt z userami i obiekt z pytaniami.
import { getInitialData } from '../utils/api.js';

//DISPATCH TO FUNKCJA, KTORA KOPIE W DUPE ODPOWIEDNIEGO REDUCERA
//i przechodzi tez po wszystkich listenerach (funkcjach subskrybowanych) i je wywoluje
//ten zapis (dispatch) stosujemy po to, zeby przeslac funkcje dispatch nizej, to funkcji, ktore wykonuje sie ponizej
//(dispatch) jako argument brany jest z App.js (wywoluje sie tam funkcja this.props.dispatch(handleInitialData())
//handleInitialData() wywoluje sie tam jako callback, a callback ma dostep do funkcji nad (przed) nim, dzieki temu mozemy wykorzystac dispatch nizej
//tutaj, dispatch z App.js ma przeslane akcje: receiveUsers, receiveQuestions.
//Funkcja dispatch sama w sobie (w bibliotece) ma wywolanie glownego reducera (tego reducera, ktory wszystkie laczy w jeden - combineReducers)
//i temu glownemu reducerowi wysyla akcje. Glowny reducer tak naprawde wysle akcje wszystkim reducerom, kazdy reducer sprawdzi sobie po nazwie akcji,
//czy cos trzeba zrobic, ale tylko jeden zrobi robote

const AUTHED_ID = null

export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}