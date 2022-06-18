import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='nftme__blog-container_article'>
    <div className='nftme__blog-container_article-image'>
    <img src={ imgUrl } alt='blog image'/>
    </div>
    <div className='nftme__blog-container_article-content'>
    <div>
    <p>{date}</p>
    <h3>{title}</h3>
    </div>
    <p><a href='https://medium.com/@nilftoken'>Read Full Article</a></p>
    </div>
    </div>
  )
}

export default Article