//reducer to funkcja, ktora przy KAZDEJ akcji zostanie kopnieta w tylek
//przez glownego reducera (combineReducer - wywoluje sie przy kazdym dispatchu)
//jesli jest ustawiony jakis middleware, to zostanie wywolany przed reducerem

//reducer sprawdza co to za akcja (jej typ) i na tej podstawie zmienia stan glownego store'a
//jesli zadna akcja nie pasuje do tej opisanej w reducerze, to reducer zwroci stan niezmieniony :)

//UWAGA: w reducerze "state" oznacza tylko FRAGMENT store'a Reduxowego (tu: tylko questions), nie caly Store!

import {RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions (state = {}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question 
      }
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]:{
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser)
          }
        }
      }
    default:
      return state
  }
}