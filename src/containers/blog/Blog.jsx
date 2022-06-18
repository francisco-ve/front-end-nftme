import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='nftme__blog section__padding' id='blog'>
    <div className='nftme__blog-heading'>
    <h1 className='gradient__text'>A lot is going on, but we keep you updated</h1>
    </div>
    <div className='nftme__blog-container'>
    <div className='nftme__blog-container_groupA'>
    <Article imgUrl={blog01} date='April 27 2022' title='Tokenomics updated'/>
    </div>
    <div className='nftme__blog-container_groupB'>
    <Article imgUrl={blog02} date='May 8 2022' title='How does NFTMe Put Real Humans Into the Metaverse?'/>
    <Article imgUrl={blog03}  date='January 13 2022' title='NFTMe Is Creating The 1st 3D Real Human Portal Of The Metaverse'/>
    <Article imgUrl={blog04}  date='January 13 2022' title='The donut studio Update'/>
    <Article imgUrl={blog05}  date='June 13 2022' title='F.A.Q'/>
    </div>
    </div>
    </div>
  )
}

export default Blog