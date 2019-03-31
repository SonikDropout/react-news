const initState = {
  isFetching: false,
  isFetchError: false,
  articles: []
}

const news = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_NEWS_ERROR':
      return {
        articles: [],
        isFetchError: true,
        isFetching: false
      }
    case 'FETCH_NEWS_SUCCESS':
      return {
        articles: action.articles,
        isFetching: false,
        isFetchError: false
      }
    default:
      return state
  }
}

export default news