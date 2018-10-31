//this is the factory for creating stores
//npm install --save redux
import { createStore, combineReducers, applyMiddleware } from 'redux' //all used to create storeFactory
import { colors, sort } from './reducers'//import the reducers colors() [which contains color()] and sort() so they can be used to create (and be accessed from) the store
import stateData from '../../data/initialState'//contains initialState and grows each time page is refreshed
//import { v4 } from 'uuid'//npm uuid


//some middleware for logging dispatched actions to the console
const logger = store => next => action => {
  let result //declared locally
  console.groupCollapsed("dispatching", action.type)//([optional label]) adds a collapsable arrow in console window
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action) //invoke next() with the action causing the state to change
  console.log('next state', store.getState())
  console.groupEnd() //stop using collapsable arrow grouping the above items inside the console window.
  return result
}//close logger()

//a piece of middleware for saving state to localStorage['redux-store']
const saver = store => next => action => {
  let result = next(action)//invoke next() with the action causing the state to change...again
  localStorage['redux-store'] = JSON.stringify(store.getState())//retrieve state from the store and save it in local storage as a string
  return result
}
//create a store and apply the two middlewear pieces above to it
const storeFactory = (initialState=stateData) =>
  //use the combined reducers (colors[color{}] and "sort") and localStorage to create a store...
  //...and apply the above two middleware pieces to it (logger & saver)
  applyMiddleware(logger, saver)(createStore)(//(either) localStorage['redux-store'] (:or initialState) & and the combined reducers are passed to createStore
    combineReducers({colors, sort}), //combineReducers is passed an object literal containing the two SFCs: colors() & sort()
    (localStorage['redux-store']) ? //if localStorage has been used...
      JSON.parse(localStorage['redux-store']) : //...parse back the string made above...
      initialState//...otherwise, just return the initial state saved in initialState.json (stateData)
  )

//everything in the entire module is bundled up together and exported in the storeFactory
export default storeFactory



//saving to local localStorage
/*
const store = createStore(
  combineReducers({colors, sort}),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
      {}
)

store.subsribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

console.log('current color count is ', store,getState().colors.length)
console.log('current state', store.getState())

store.dispatch({
    type: "ADD_COLOR",
    id: uuid.v4(),
    title: "Love Pink",
    color: "#f142ff",
    timestamp: new Date().toString()
})
*/
