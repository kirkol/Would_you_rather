export const RECEIVE_USERS = 'RECEIVE_USERS'

// funkcja jako argument przyjmuje to co zwroci API (czyli liste userow)
// zwraca obiekt, ktory zawiera typ: RECEIVE_USERS i wszystkich userow z API
export function receiveUsers(users){
  type: RECEIVE_USERS,
  users
}