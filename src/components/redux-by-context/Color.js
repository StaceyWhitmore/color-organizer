/*REFACTORED to pass Redux store via CONTEXT. branch redux-by-context*/
import '../stylesheets/Color.scss'
import React, {Component} from 'react'
//import {Star, StarRating} from'./components'
//import Star from './Star'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'
import TimeAgo from './TimeAgo'

class Color extends Component {

  render() {
    const {id, title, rating, color, timestamp} = this.props//*added `id` remove ` onRate, onRemove`
    const { store } = this.context //*...also, retrieve (via obj. destructuring) the store from the context object
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={onRemove}>
          store.dispatch(
            removeColor(id) //Dispatch REMOVE_COLOR action
          )
          <FaTrash/>
        </button>
        <div className="color"
          style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={timestamp} />
        <div>
          <StarRating starsSelected={rating}
                      onRate={rating =>
                        store.dispatch(
                          rateColor(id, rating) // dispatch RATE_COLOR action
                        )}
                      />
        </div>
      </section>
    )//close inner return() fx
  }//render()
}//close <Color />

Color.contextTypes = {
  store: PropTypes.object
}

Color.propTypes = {
  title:  PropTypes.string,
  rating:PropTypes.number,
  color:PropTypes.string,
  onRate:PropTypes.func
}

Color.defaultProps = {
  title:undefined,
  rating:0,
  color: "#000000",
  onRate: f=>f
}

export default Color
