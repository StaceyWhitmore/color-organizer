const sortBy = (type, field) => {
  switch (type) {
    case "date": //if sort by field timestamp(of type: date) then ...
      //console.log(`a[field] is ${a[field]}. b[field] is ${b[field]}`)
      return (a,b) => new Date(b[field]) - new Date(a[field]) //e.g. new Date(timestamp[timestamp]) - new Date(date[timestamp])
    case "string":
      //console.log(`a[field] is ${a[field]}. b[field] is ${b[field]}`)
      return (a,b) => (a[field] < b[field]) ? -1 : //if a<b then return falsey(-1)
       1 //...otherwise, truthy(1)
    default :
      //console.log(`a[field] is ${a[field]}. b[field] is ${b[field]}`)
      return (a,b) => b[field] - a[field] //...other by field rating ( of type: number)
  }//close switch
}//close <sortBy() />

export const sortFunction = sort =>
  (sort === "SORTED_BY_TITLE") ?
    sortBy("string","title") : //by field title (of type: string) type (a) = "string", field (b) = "title"
    (sort === "SORTED_BY_RATING") ?
      sortBy("number","rating") : //by field rating(of type: number)
      sortBy("date","timestamp")  //...otherwise, by field timestamp (of type: date)

export const getFirstItem = () =>
  array => array[0]

export const filterById = (array, id) =>
  array.filter(item=>item.id === id) //filter out the item with matching id and put in into array at [0]

//connect runs functions from R -> L (instead of Left to Right)
export const findById = connect(
  getFirstItem,
  filterById
)
