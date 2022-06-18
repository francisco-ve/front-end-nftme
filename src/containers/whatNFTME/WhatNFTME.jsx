import React from 'react';
import './whatNFTME.css';
import frente from '../../assets/bg-image-1-header.png';

const WhatNFTME = () => {
  return (
    <div className='nftme__whatNFTME section__padding' id='#'>
    <div className='nftme__whatNFTME-content'>
      <h1 className='gradient__text'>Real Humans in the Metaverse</h1>
      <p>We have created a path for real humans to be teleported to the metaverse.Our first mobile teleporter studio is online and ready. Our makeup, hair, lighting, and wardrobe team is ready to make your Moment eternal.</p>
      <div className='nftme__whatNFTME-content_btn'>
     <button type='button'><a href='https://nftme.gitbook.io/nftme-docs/nftme-mechanics'>How it works</a></button>
   
     <button type='button'><a href='https://www.orca.so/'>Buy $NILF Token</a></button>
     <button type='button'><a href='https://magiceden.io/'>Marketplace</a></button>
    
    
     </div>
  
     </div>
     <div className='nftme__whatNFTME-image'>
     <img src={frente} alt='frente'></img>
 
    </div>
    </div>
    
  )
}

export default WhatNFTME