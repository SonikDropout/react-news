import apiKey from '../../../newsApi'

const url = `https://newsapi.org/v2/top-headlines?
sources=bbc-news&
sortyBy=popularity&
apiKey=${apiKey}`

export default () => (dispatch) => {
  dispatch({ type: 'FETCH_NEWS' })
  return fetch(url).then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_NEWS_SUCCESS',
      articles: data.articles
    }))
    .catch(error => dispatch({
      type: 'FETCH_NEWS_ERROR',
      error
    }))
}