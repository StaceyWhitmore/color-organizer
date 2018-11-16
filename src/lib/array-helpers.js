import { compose } from 'redux'  

/*
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
*/

const sortByDate = () =>
  (a,b) => new Date(b[field]) - new Date(a[field])

const sortByString = () =>
(a,b) => (a[field] < b[field]) ? -1 : //if a<b then return falsey(-1)
 1 //...otherwise, truthy(1)

//rating
const sortByNumber = () =>
  (a,b) => b[field] - a[field]

const whichSort = () =>
(type === "date") ?
      sortByDate(field) :
      (type === "string") ?
          sortByString(field) :
          sortByNumber(field)

//EXPORTED returns sortBy("type", "by")
export const sortFunction = sort =>
  (sort === "SORTED_BY_TITLE") ?
    sortBy("string","title") : //by field title (of type: string) type (a) = "string", field (b) = "title"
    (sort === "SORTED_BY_RATING") ?
      sortBy("number","rating") : //by field rating(of type: number)
      sortBy("date","timestamp")  //...otherwise, by field timestamp (of type: date)

// returned in stateHash["date"] = "SORTED_BY_DATE" (eventually passed to sortFn above)
const getSortState = (sortBy= "date",
  stateHash= {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
  }) => stateHash[sortBY]

//returns sortBy("type", "by")
const locateSortFunction = () => compose(
  sortFunction,
  getSortState
)


//** MAIN EXPORTED
export const sortColors = (colors, sortBy) =>
  compose(
    fn => [...colors].sort(fn),
    locateSortFunction
  )(sortBy) //invoked with sortBy() returned from locateSortFunction() -->fn [...colors] will be sorted by

  //EXPORTED to compose findById()
export const getFirstItem = () =>
  array => array[0]

  //EXPORTED to compose findById()
export const filterById = (array, id) =>
  array.filter(item=>item.id === id) //filter out the item with matching id and put in into array at [0]

//**MAIN EXPORT connect runs functions from R -> L (instead of Left to Right)
export const findById = compose(
  getFirstItem,
  filterById
)
