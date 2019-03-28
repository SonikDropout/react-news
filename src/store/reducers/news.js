const news = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      return [...action.news]
    default:
      return state
  }
}

export default news