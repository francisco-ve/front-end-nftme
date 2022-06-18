import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  return (
    <div className='nftme__features section__margin' id='whatNFTME'>
    <div className='nftme__features-feature'>
    <Feature title='What we do' text= 'A majority of the current NFT market is filled with algorithm-generated digital art. Although ground breaking on it’s own, it’s very hard to imagine this as the future world human beings will live in. The Metaverse will expand to include large varieties of styles and looks. NFTMe is expanding the industry palate for beautifully curated moments of “Real” into the Metaverse.' />
    </div>
<div className='nftme__features-heading'>
<h1 className='gradient__text'>Collaborate to Earn</h1>
<p><a href='https://sketchfab.com/nftme'>Explore The Showcase</a></p>
</div>
<div className='nftme__features-container'>
<Feature title='Moments' text='NFTMe NFTs, also known as Moments, capture a split-second or a “Moment” in time of real people in 360° and High Definition. More importantly, we utilize studio lightning set by pro photographers to make sure your features, wardrobe, eyes, and hair, are captured in the most iconic way. '/>
<Feature  title='Accessories' text='Accessory NFTs are visually stunning NFTs that can be added to Moments. Each Accessory NFT can be installed in a 360° NFT. After being installed, they have 2 special effects (IRL royalty sharing + in-game useable power ups).'/>
<Feature title='Games' text='We are making sure we’re rewarding the community that supports us. There is no risk of losing your Moment NFTs or Accessory NFTs, they get returned after each Staking pool completes. ' />
</div>
    </div>
  )
}

export default Features