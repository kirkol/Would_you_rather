export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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
export function addQuestion(question){
  return{
    type: ADD_QUESTION,
    question
  }
}