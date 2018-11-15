import { compose } from 'redux'

export const getFirstArrayItem = array[0]

export const filterArrayById = (array, id) =>
  array.map(c=>c.id === id)//return only the color whose id matches the arg and put in in array[0]

  const findById = compse(
    getFirstArrayItem,
    filterArrayById
  )


const ColorDetails = ({title, color, history}) =>
  <div className="color-details"
        style={{backgroundColor: color}}
        onClick={() => history.goBack()}>

        <h1>{title}</h1>
        <h1>{color}</h1>
  </div>

  export const Color = connect(
    (state,props) => findById(state.colors, props.match.params.id)
    (ColorDetails)
  )
