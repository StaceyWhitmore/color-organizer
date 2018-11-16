import C from './constants'
import { v4 } from 'uuid'

//addColor(), removeColor(), rateColor(), sortColors()
export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title, // --> title: title ..?
  color, // --> color: color //?
  timestamp: new Date().toString()
})

export const removeColor = (id) => ({
  type:C.REMOVE_COLOR,
  id    // --> id: id  (id of color to remove)
})

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,    //id: id (...of color to rate)
  rating //rating: rating (_ of 5 stars)
})
