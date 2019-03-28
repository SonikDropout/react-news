import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import apiKey from '../../newsApi'

const url = `https://newsapi.org/v2/top-headlines?
sources=bbc-news&
sortyBy=popularity&
apiKey=${apiKey}`

function News({ news, setNews }) {

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    news.length
      ? news.map(article => <Arcticle article={article} key={article.publishedAt} />)
      : <h2>Sorry, no news for today...</h2>
  )
}

function Arcticle({ article }) {
  return (
    <Row>
      <Col>
        <h2 className="mb-1">{article.title}</h2>
        <p className="text-muted">{article.description}</p>
        <p>{article.content}</p>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => dispatch({ type: 'FETCH_NEWS_SUCCESS', news })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
