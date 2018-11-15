/*upper menu for sorting by: date(default), title, or rating*/
import { NavLink }  from 'react-router'
const selectedStyle: {
  color: 'red'
}


/*export*/ const Menu = ({match}) =>
  <nav className="menu">
    <NavLink to="/" style={match.isExact && selectedStyle}> date </NavLink>
    <NavLink to="/sort/title" activeStyle={selectedStyle}>title</NavLink>
    <NavLink to="/" activeStyle={selectedStyle}>rating</NavLink>
  </nav>

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
