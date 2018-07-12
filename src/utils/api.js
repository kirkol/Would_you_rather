import {
  _getUsers,
  _getQuestions
} from './_DATA.js'

//tutaj fajny trik - wykonanie promisa po promisie
//dopiero jak wszystkie sie wykonaja, to lecimy dalej
//funkcja tworzy jeden obiekt skladajacy sie z tego co zwrocilo nam API
//czyli z userow i z pytan
export function getInitialData(){
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ])
  .then(([users, questions]) => ({
    users,
    questions
  }))
}