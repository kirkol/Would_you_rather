//MIDDLEWARE to funkcja, ktore wywoluje sie pomiedzy dispatchem, a reducerem:
//dispatch -> middleware -> reducer
//ten dziwny zapis (store) => (next) => (action), to przekazywanie loggerowi dostepu
//do nich - zeby ostatecznie logger mial dostep do glownego store'a (bo uzywa funckji getStore),
//zeby mial dostep do nexta (chodzi o kolejna funkcje middleware, ktora sie dzieje po loggerze 
//(uwaga: nie powinno byc nic po loggerze, ale to "kultura zapisu"), logger juz tylko przesyla 
//efekt swojego dzialania "dalej", tu: po prostu do glownego reducera).
//musi miec tez dostep do action, czyli po prostu akcji jaka zostala wyslana do glownego reducera

//UWAGA: logger jako middleware powinien byc ostatnia funkcja w middleware'ach!!!

const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger