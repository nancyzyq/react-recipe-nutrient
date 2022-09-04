const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENT'

export const fetchIngredients = () => {
    return async (dispatch, getState) => {
        try {
            let ingredients = [
                {name: 'beef', energy: 250},
                {name: 'chicken', energy: 180}
            ]
            dispatch({
                type    : UPDATE_INGREDIENTS,
                payload : ingredients
            })
        } catch (err) {
            console.log(err)
        }
    }
}