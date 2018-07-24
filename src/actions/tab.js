export const TOGGLE_TAB = 'TOGGLE_TAB'

export function toggleTab(tab){
  return{
    type: TOGGLE_TAB,
    tab
  }
}