/*containers.js NO longer receives the sort value from state.
It will instead receive sorting instructions as a route parameter,
passed to <Color> within the match property.*/

import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, rateColor, removeColor, sortColors } from '../actions'
import { sortFunction } from '../lib/array-helpers'

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(AddColorForm)

export const Menu = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(sortColors(sortBy))
            }
        })
)(SortMenu)

export const Colors = connect(
  ({colors}, {match}) =>
    ({
      colors:sortColors(colors, match.params.sort)
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeColor(id))
      },
      onRate(id, rating) {
        dispatch(rateColor(id,rating))
      }
    })
)(ColorList)
