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
