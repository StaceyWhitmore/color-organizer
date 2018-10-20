import React, { Component } from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'

/*export*/ class Color extends Component {
  //backgroundColor will be changed to gray just before the comp mounts
  componetWillMount() {
    this.style = { backgroundColor: "#CCC"}
  }
  //But remmber when a parent Comp is updated E/ child rerenders...
  //...therfor, call this lifecylce method

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props
    let testVar = rating !== nextProps.rating
    console.log('Inside shouldComponentUpdate() !== nextProps.rating is: ' + testVar )
    return rating !== nextProps.rating
  }

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props
    this.style = null
    this.refs.title.style.backgroundColor = "red"
    this.refs.title.style.color = "white"
    //the alert below will cause the app to pause w/ the bg color on red until the alert box is removed.
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }

  ComponentDidUpdate(prevProps) {
    const { title, rating } = this.props
    const status = (rating > prevProps.rating) ? 'better' : 'worse'
    console.log(`${title} is getting ${status}`)
    this.refs.title.style.backgroundColor = "" //back to white (blank default)
    this.refs.title.style.color = "black" //change the text black
  }

  render() {
    const {title,color,rating,onRate} = this.props
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <div className="color"
             style={{ backgroundColor: color }}>
        </div>
        <StarRating starsSelected={rating}
                    onRate={onRate} />
      </section>
    )
  }//close render()
}//close <Color />

Color.propTypes = {
  title:PropTypes.string,
  rating:PropTypes.number,
  color:PropTypes.string,
  onRate:PropTypes.func
}

Color.defaultProps = {
  title:undefined,
  rating:0,
  color:"#000000",
  onRate: f=>f
}

export default Color

/*{{ backgroundColor: color }} ?}}*/
