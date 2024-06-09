import React from 'react'
import './Article.css'

const article = ({imgUrl , date , text}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <p>{text}</p>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default article