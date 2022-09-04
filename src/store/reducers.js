import { combineReducers } from 'redux'
import ingredientReducer from './Ingredient/reducer'

const reducer = combineReducers({
	Ingredient: ingredientReducer
});

export default reducer