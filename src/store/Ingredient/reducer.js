let initState = {
  ingredients: []
}

const ingredientReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_INGREDIENTS':
      // console.log(state, action.payload)
      return {
        ...state,
        ingredients: action.payload
      }
      default:
        return state
  }
}

export default ingredientReducer