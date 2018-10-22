import React, {Component} from 'react'
//import {Star, StarRating} from'./components'
//import Star from './Star'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
import '../stylesheets/Color.scss'



class Color extends Component {
  //bg will turn grey for a short while, while comp is mounting
  componentWillMount() {
    this.style = {backgroundColor: "#CCC"}
  }
  //This method is only called if <Color> is going to update

  shouldComponentUpdate(nextProps){
    //rating(i.e. this.props) is the old rating and nextProps is the new rating
    const {rating} = this.props
    console.log(`old(current)rating is ${rating} | new rating is ${nextProps.rating}`)
    return rating !== nextProps.rating
  }

  //remove gray just before update (otherwise, it will stay gray even after the update)
  componentWillUpdate(nextProps) {
    const {title,rating} = this.props //this.props is current(/old) props
    this.style = null
    this.refs.title.style.backgroundColor = 'red'//once it has been updated background will stay red
    this.refs.title.style.color = 'white' //...and font color will remain white
    //alert will pause update and above changes will not take effect until alert window is closed
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }
  componentDidUpdate(prevProps) {
    const {title, rating} = this.props
    const status = (rating > prevProps.rating) ? 'better' : 'worse'
    console.log(`${title} is getting ${status}`)
    this.refs.title.style.backgroundColor = "" //reset back to "" (or white) after updated
    this.refs.title.style.color = "black" //...however, the font will remain black after at least one update has ocurred.
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
