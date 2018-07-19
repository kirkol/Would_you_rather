import { _saveQuestion } from "../utils/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_UPDATE = 'USER_UPDATE'
export const USER_UPDATE2 = 'USER_UPDATE2'

// funkcja jako argument przyjmuje to co zwroci API (czyli liste userow)
// zwraca obiekt, ktory zawiera typ: RECEIVE_USERS i wszystkich userow z API
export function receiveUsers(users){
  return{
    type: RECEIVE_USERS,
    users
  }
}

// funkcja jako argument przyjmuje question, ktory dostanie od API,
// w reducerze nastapi update stora w obiekcie users - do usera (do jego paramsow), ktory stworzyl pytanie
// zostanie dodane id tego pytania
// ta funkcja zostala dodana "sztucznie", poniewaz API nie jest tu prawdziwym API i 
// nie mozemy odswiezyc sobie info o userach (bo sciagnie i tak dane z pliku .txt, ktory ma symulowac nasze API :)

//both function below have been added to imitate API update
export function UserUpdate(q){
  return{
    type: USER_UPDATE,
    q
  }
}

export function UserUpdate2({ authedUser, qid, answer }){
  return{
    type: USER_UPDATE2,
    authedUser,
    qid,
    answer
  }
}