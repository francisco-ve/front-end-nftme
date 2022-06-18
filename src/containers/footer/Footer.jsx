import React from 'react';
import './footer.css';
import nftmeLogo from '../../assets/logo-3.png'

const Footer = () => {
  return (
    <div className='nftme__footer section__padding'>
    <div className='nftme__footer-heading'>
    <h1 className='gradient__text'>Join our Community Channels</h1>
    </div>
    <div className='nftme__footer-btn'>
      <p><a href='https://linktr.ee/Nilftoken'>Accesss</a></p>
    </div>

    <div className='nftme__footer-links'>
    <div className='nftme__footer-links_logo'>
    <img src={nftmeLogo} alt='logo' id='home'/>
    <p>Email: support@nilf.io</p>
    </div>
    <div className='nftme__footer-links_div'>
    <h4>Links</h4>
    <p><a href='https://app.gitbook.com/o/VePXBgz2rDiyE7zEMa7L/s/bfSEjPIozwDaQ4DfMKXA/NFTMe-docs'>Whitepaper</a></p>
    <p><a href='https://nftme.gitbook.io/nftme-docs/nftme-mechanics/games'>Games</a></p>
    <p><a href='https://explorer.solana.com/address/EjcSnvLtAbm6tXVfNKm3YNSfvPC3tdsTQw6jv3K5ZwHV'>Audit</a></p>
    <p><a href='https://explorer.solana.com/address/EjcSnvLtAbm6tXVfNKm3YNSfvPC3tdsTQw6jv3K5ZwHV'>$NILF token Smart Contract</a></p>
    </div>
    <div className='nftme__footer-links_div'>
    <h4>Company</h4>
    <p><a href='#'>Partners</a></p>
    <p><a href='#'>Pitch Deck</a></p>
    <p><a href='https://sketchfab.com/nftme'>Creators</a></p>

</div>
    <div className='nftme__footer-links_div'>
    <h4>Social Media</h4>
    <p><a href='https://twitter.com/NILFToken'>Twitter</a></p>
    <p><a href='https://t.me/nilftoken'>Telegram</a></p>
    <p><a href='https://discord.com/invite/nilftoken'>Discord</a></p>
    <p><a href='https://medium.com/@nilftoken'>Medium</a></p>
    
    </div>
    </div>
    <div className='nftme__footer-copyright'>
    <p>© 2022 NFTMe. All rights reserved</p>
  
    </div>
    </div>
  )
}

export default Footer