import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
// function below shouldn't be here! it has been added to simulate real API
// in "real world" I would just call receiveUsers() in QuestionNew (after dispatch(handleAddQuestion()))
import { UserUpdate, UserUpdate2 } from "./users"; 

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

// funkcja Action Creatora, ktora obsluguje polaczenie z API
// zwraca funkcje, ktora zostanie przetworzona przez middleware'a (thunk)
// thunk wywola ta funkcje (i jej podfunkcje, jesli sa), az zwrocone zostana obiekty (normalne akcje)
export function handleAddQuestion(question){
  return(dispatch) => {
    return _saveQuestion(question)
    .then((q) => {
      dispatch(addQuestion(q));
      dispatch(UserUpdate(q)); // this function shouldn't be here, see comment on top
    })
  }
}

// funkcja Action Creatora, ktora obsluguje polaczenie z API
// zwraca funkcje, ktora zostanie przetworzona przez middleware'a (thunk)
// thunk wywola ta funkcje (i jej podfunkcje, jesli sa), az zwrocone zostana obiekty (normalne akcje)
export function handleAnswerQuestion({ authedUser, qid, answer }){
  return(dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => {
      dispatch(answerQuestion({ authedUser, qid, answer }))
      dispatch(UserUpdate2({ authedUser, qid, answer }))
    })
  }
}

// funkcja przyjmuje jako argument wszystkie pytania jakie zostana zassane z API
// zwraca obiekt o type: RECEIVE_QUESTIONS i z pytaniami jakie zwrocilo nam API
export function receiveQuestions(questions){
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

// funkcja jako argument przyjmuje pytanie, ktore dodal user
// zwraca obiekt, ktory ma type: ADD_QUESTION oraz samo pytanie dodane przez usera
function addQuestion(question){
  return{
    type: ADD_QUESTION,
    question
  }
}

function answerQuestion({ authedUser, qid, answer }){
  return{
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}