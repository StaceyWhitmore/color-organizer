import storeFactory from './store/storeFactory'// ./store/index.js
import { addColor, removeColor, rateColor, sortColors } from './actions'//.js

//const store = storeFactory()
const store = storeFactory()

store.dispatch(addColor("rio verde", "#67bf4f"))
store.dispatch(rateColor("95d9acee-6ae6-4d7b-8499-65b145032979", 3))
store.dispatch(sortColors("date"))
store.dispatch(removeColor("e9015b4e-975e-423d-c390-77df163e1dbd"))

console.log('The current state is: ', store.getState())
console.log('dispatch actions from here in the console ')


//makes them global to the window object in browser
window.store = store //'window.store' is the way it is to be typed in the console.

window.addColor = addColor
window.removeColor = removeColor
window.rateColor = rateColor
window.sortColors = sortColors
