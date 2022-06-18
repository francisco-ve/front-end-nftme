import React from 'react';
import "./header.css";
import backgroundVideo from "../../assets/Copia de video-1-release-2.mp4"


const Header = () => {
  return (
    <div className='nftme__header ' id='home'>
    <div className='nftme__header-content'></div>
    <video autoPlay muted id="video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>

   
   
    </div>
  )
}

export default Header