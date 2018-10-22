import React, {Component} from 'react'
//import {Star, StarRating} from'./components'
import Star from './Star'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
import '../stylesheets/Color.scss'



class Color extends Component {
  //bg will turn grey for a short while, while comp is mounting
  componentWillMount() {
    this.style = {backgroundColor: "#CCC"}
  }


  render() {
    const {title, rating, color, onRate} = this.props
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <div className="color"
          style={{ backgroundColor: color }}>
        </div>
        <StarRating starsSelected={rating} onRate={onRate} />
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

export default Color
