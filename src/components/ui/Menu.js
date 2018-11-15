/*upper menu for sorting by: date(default), title, or rating*/
import PropTypes from 'prop-types'
import { NavLink }  from 'react-router'
import '../stylesheets/Menu.scss'

const selectedStyle: {
  color: 'red'
}


/*export*/ const Menu = ({ match }) =>
  <nav className="menu">
    <NavLink to="/" style={match.isExact && selectedStyle}> date </NavLink>
    <NavLink to="/sort/title" activeStyle={selectedStyle}>title</NavLink>
    <NavLink to="/sort/rating" activeStyle={selectedStyle}>rating</NavLink>
  </nav>

  //make sure Menu.propTypes.sort is a string
  Menu.propTypes = {
    sort: PropTypes.string
  }
  
export default Menu


/*
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

*/
