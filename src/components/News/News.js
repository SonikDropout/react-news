import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import fetchNews from '../../store/actions/fetchNews'
import Article from './Article'

function News({ articles, fetchNews, isFetching, isFetchError }) {

  useEffect(() => { fetchNews() }, [])

  return (
    <Row>
      <Col>
        {
          isFetching
            ? <h2>Loading news...</h2>
            : isFetchError
              ? <h2>Sorry, no news for today...</h2>
              : articles.map(article => <Article article={article} key={article.publishedAt} />)
        }
      </Col>
    </Row>
  )
}


const mapStateToProps = (state) => {
  return { ...state.news }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
