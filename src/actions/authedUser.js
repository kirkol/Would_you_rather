export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// funkcja jako id przyjmuje id wlasnie zalogowanego usera
// zwraca obiekt, ktory sklada sie po prostu z type: SET_AUTHED_USER i id zalogowanego usera
export function setAuthedUser(id){
  return{
    type: SET_AUTHED_USER,
    id
  }
}