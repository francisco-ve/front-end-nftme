import React from 'react';
import possibilityImage from '../../assets/white-wings.gif'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='nftme__possibility section__padding' id='possibility'>
    <div className='nftme__possibility-image'>
      <img src={possibilityImage} alt='possibility'></img>
    </div>
    <div className='nftme__possibility-content'>
    <h4>The NFT creator will record their wallet address for 0.1~4% of royalty</h4>
    <h1 className='gradient__text'>Future-Proof transportable to the metaverse</h1>
    <p>Our Moments will be experienced across various metaverse lands (e.g., Superworld, Decentraland, Sandbox), allowing for NFTMe Moments to be displayed in your virtual spaces, or head to destinations with larger collections to see what others have.</p>
    <h4><a href='https://linktr.ee/Nilftoken'>Join our Community</a></h4>
    </div>

    </div>
  )
}

export default Possibility