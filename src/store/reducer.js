
const initialState = {
  movies : []
}

const reducer = (state = initialState, action) => {

  if(action.type == "ADD_MOVIE") {
    return {
      movies : state.movies.concat(action.movie)
    }
  }

  return state
}

export default reducer
