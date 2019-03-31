import React from 'react'

function Article({ article }) {
  return (
    <>
      <h2 className="mb-1">{article.title}</h2>
      <p className="text-muted">{article.description}</p>
      <p>{article.content}</p>
    </>
  )
}

export default Article
