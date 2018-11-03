//the reducer stateless functional components for updating specific parts of the state tree
//..to eventually be combined into one reducer using combineReducers() in storeFactory
//Remember reducers have NO SIDE EFFECTS
import C from '../constants'//'C' for Action Constants

//each reducer is passed 1) the state(as {} or []) and an action object

//{} for updating individual color leaves in the state tree
//contains the ADD_COLOR & RATE_COLOR actions
export const color = (state={}, action) => {
  switch(action.type) {
    case C.ADD_COLOR :
      return {
        //returns an array representing [entire state + (an empty {} object & the action object (type.ADD_COLOR))]
        //see case for for `C.ADD_COLOR` below
              //NEW!!!! Mat OBJ TO RETURN
              id: action.id,
              title: action.title,
              color: action.color,
              timestamp: action.timestamp,
              rating: 0
      }
      case C.RATE_COLOR :
        return (state.id !== action.id) ? // is this Not
          state : {
            ...state,
            rating: action.rating
          }
      default :
        return state //if it's Not the 1 we're looking for then just return that state item (so we can move on to the next one)
  }//close switch
}//close color() reducer



//[] composed with the color() reducer
export const colors = (state=[], action) => {
  switch (action.type) {
    case C.ADD_COLOR : //if action.type == C.ADD_COLOR
      return [
        ...state, //then return the entire state + ....
        //i.e. color({}, "ADD_COLOR")
        color({}, action)//...one more color item
      ]
    case C.RATE_COLOR : //if action.type == C.RATE_COLOR
      return state.map( //return the entire array with the changed rating
        c => color(c, action)//ie. color(the-item-in-state, "RATE_COLOR")
      )
    case C.REMOVE_COLOR : //if action.type == C.REMOVE_COLOR
      return state.filter(//return the entire array minus the item that didn't pass the condition
        c => c.id !== action.id
      )
    default :
      return state
  }//close switch
}//close colors() reducer

// state=SORTED_BY_DATE default SEE initialState.json line 32 also
export const sort = (state="SORTED_BY_TITLE", action) => {
  switch (action.type) {
    case C.SORT_COLORS : //if action.type == "SORT_COLORS" ...
      return action.sortBy//...then return
    default :
      return state
  }//close switch
  return ""
}

//to be imported and used by the storeFactory
