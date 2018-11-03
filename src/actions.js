//A list of action creators (that create action objects)
import C from './constants'//'AC' for Action Constants
import { v4 } from 'uuid'//npm uuid generates unique id's

//1) REMOVE_COLOR action object creator
export const removeColor = id =>
({
  //type: "REMOVE_COLOR"
  type: C.REMOVE_COLOR,
  id //passed in on invocation
})
//2) ADD_COLOR action object creator
export const addColor = (title, color)=>
({
  type: C.ADD_COLOR,
  id: v4(),
  title, //set to (passed) title to name the color
  color,//set to (passed) hex value for color to add to store
  timestamp: new Date().toString()
})
//3) RATE_COLOR action object creator
export const rateColor = (id, rating) =>
({
  type: C.RATE_COLOR,
  id,
  rating
})
//4) SORT_COLORS action object creator
//uses conditional rendering to render different action objects
export const sortColors = sortedBy =>
(sortedBy === "rating") ?
  ({
    type: C.SORT_COLORS,
    sortBy: "SORTED_BY_RATING"//if store.dispatch(sortColors("rating"))
  }) :                        //..else...
  (sortedBy === "title") ?    ////if store.dispatch(sortColors("title"))
    ({
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_TITLE"//...then sore by 'title'
    }) :                       //otherwise....it must be store.dispatch(sortColors("date")). so...
    ({
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_DATE"  //..just sort them by date (the default)
    })




//store.dispatch( removeColor("id-of-color-would-will-here"))
