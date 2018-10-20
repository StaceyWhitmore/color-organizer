import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Star from './Star'

class StarRating extends Component {
  constructor(props) { //when es6 class is mounted, constructor() is invoked with props as first arg...
    //GIVE IT SUPER (i.e. Component class) props!!! for state mgmt purposes
    super(props)//...those props are then sent TO the SUPERclass (Component) by invoking super() which initializes the component INSTANCE. <StarRating /> inherits its state functionality from Component from this super call. I.E. it get SUPER PROPS!!!
    this.state = {
      starsSelected: props.starsSelected || 0 
    }
    this.change = this.change.bind(this)
  }
  change(starsSelected) {
    this.setState({starsSelected}) //{}
  }
  render() {
    const totalStars = this.props
    const starsSelected = this.state //StarsSelected is the StateVar and it is destructured from this.state
    return(
      <div className='star-rating'>
      {
        [...Array(totalStars)].map((n,i) =>
        <Star key={i} //set key to Array index
              selected={i<starsSelected}
              onClick={() => this.change(i+1)}
        />
      )}
        <p>Rating: {starsSelected} of {totalStars}</p>
      </div>
    )
  }
}//close <StarRating />

StarRating.propTypes = {
  totalStars: PropTypes.number
}

StarRating.defaultProps = {
  totalStars:5 //5 star default
}

render(
  <StarRating totalStars={7} starsSelected={3} />,
  document.getElementById('root')
)

//export default StarRating
