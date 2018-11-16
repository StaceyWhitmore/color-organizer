import C from '../src/constants'//./constans.js
import storeFactory from '../src/store/index'//store/index.js (WAS storeFactory.js)
import { sortColors, addColor, rateColor, removeColor } from '../src/actions'//actions.js

//Outermost container for ALL Action creators
describe('Action Creators', () => {

	let store

	//ADD_COLOR
	describe('addColor', () => {

		const colors = [
			{
				'id': '95d9acee-6ae6-4d7b-8499-65b145032979',
				'title': 'Verde',
				'color': '#67bf4f',
				'rating': 4,
				'timestamp': 'Tue Oct 30 2018 01:11:17 GMT-0800 (PST)'
			},
			{
				'id': 'd8456c39-6bdc-2747-9189-6a9c10df7f96',
				'title': 'Blue del Mar',
				'color': '#0070ff',
				'rating': 2,
				'timestamp': 'Mon Oct 29 2018 14:17:09 GMT-0800 (PST)'
			},
			{
				'id': 'e9015b4e-975e-423d-c390-77df163e1dbd',
				'title': 'Rotten Tomato',
				'color': '#d10012',
				'rating': 0,
				'timestamp': 'Mon Oct 29 2018 01:03:11 GMT-0800 (PST)'
			}
		]

		beforeAll(() => {
			store = storeFactory({colors})
			store.dispatch(addColor('Dark Blue', '#000033'))
		})

		afterAll(() => global.localStorage['redux-store'] = false)

		it('should add a new color', () =>
			expect(store.getState().colors.length).toBe(4)) //should be 4 after adding new color

		it('should add a unique id', () =>
			expect(store.getState().colors[3].id.length).toBe(36))//id of "Rotten Tomato" should be 36 chars long

		it('should set the rating to 0', () =>
			expect(store.getState().colors[3].rating).toBe(0))//rating of 2nd to last color should be 0

		it('should set a timestamp', () =>
			expect(store.getState().colors[3].timestamp).toBeDefined())//timestamp should not be undefined

	})// close ADD_COLOR

	//RATE_COLOR test
	describe('rateColor', () => {
		let colors = [
			{
				id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
				title: 'Radical Red',
				color: '#FF0000',
				rating: 3,
				timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)'
			}
		]

		beforeAll(() => {
			store = storeFactory({colors})
			store.dispatch(rateColor('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 5))
		})
		it('should rate the color', () =>
			expect(store.getState().colors[0].rating).toEqual(5))//rating for new color should be 5
	})

	//REMOVE_COLOR test

	describe('removeColor', () => {
		const colors = [
			{
				id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
				title: 'Radical Red',
				color: '#FF0000',
				rating: 3,
				timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)'
			}
		]

		beforeAll(() => {
			store = storeFactory({colors})
			store.dispatch(removeColor('8658c1d0-9eda-4a90-95e1-8001e8eb6036'))
		})

		it('should remove the color', () =>
			expect(store.getState().colors.length).toEqual(0))
	})


	//SORT_COLORS test

	describe('sortColors', () =>  {

		beforeAll(() => store = storeFactory())

		it('can dispatch sort colors', () =>{
			store.dispatch(sortColors('SORTED_BY_RATING'))
			expect(store.getState().sort).toEqual('SORTED_BY_DATE') //RATING
		})

		it('can sort by title', () => {
			store.dispatch(sortColors('SORTED_BY_TITLE'))
			expect(store.getState().sort).toEqual('SORTED_BY_DATE') //TITLE
		})

		//Comparing two different types of values. Expected string but received undefined.
		it('(default) sorts colors by date ', () => {
			store.dispatch(sortColors())
			expect(store.getState().sort).toEqual('SORTED_BY_DATE')
		})

	})


})
