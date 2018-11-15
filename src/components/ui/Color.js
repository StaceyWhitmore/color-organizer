//Aded history from <Color> props and onClick functionality and withRouter() HOC to wrap <Color>
import React, {Component} from 'react'
//import {Star, StarRating} from'./components'
//import Star from './Star'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'
import TimeAgo from './TimeAgo'
import { withRouter } from 'react-router'
import '../../stylesheets/Color.scss'

//add history from <Color> props
class Color extends Component {
  //bg will turn grey for a short while, while comp is mounting

   // onClick={() => history.push(`/${id}`)} //pushing this route in hx causes navigation to occur
  render() {
    const {title, rating, color, timestamp, onRate, onRemove, history} = this.props
    return (
      <section className="color" style={this.style}>
        <h1 ref="title"
                onClick={() => history.push(`/${id}`)}>
                {title}
        </h1>
        <button onClick={onRemove}>
          <FaTrash/>
        </button>
        <div className="color"
          onClick={() => history.push(`/${id}`)}
          style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={timestamp} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    )//close inner return() fx
  }//render()
}//close <Color />

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
/*withRouter a HOC. When <Color> is exported to it, it wraps it with a component
that passes the router properties (match, history and location) */
export default withRouter(Color)
