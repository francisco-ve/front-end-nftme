import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo-3.png';

const Menu = () => (
  <>
  <p> <a href='home#'>Home</a> </p>
  <p> <a href='#whatNFTME'>What is NFTMe</a> </p>
  <p> <a href='#possibility'>Games</a> </p>
  <p> <a href='#features'>How to join</a> </p>
  <p> <a href='#blog'>Partners</a> </p>
</>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className='nftme__navbar'>
    <div className='nftme__navbar-links'>
    <div className='nftme__navbar-links_logo'>
    <img src={logo} alt='logo' />
    </div>
    <div className='nftme__navbar-links_container'>
    <Menu />

</div>
   

    </div>
<div className='nftme__navbar-sign'>
<p> WhiteList</p>
<button type='button'> Join us </button>

</div>
<div className='nftme__navbar-menu'>
{ toggleMenu 

 ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
 : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
}
{toggleMenu && (

  <div className='nftme__navbar-menu_container scale-up-center'> 
  <div className='nftme__navbar-menu_container-links'>
  <Menu />
  <div className='nftme__navbar-menu_container-links-sign'>
<p> Whitelist</p>
<button type='button'> Join us </button>

</div>

</div>
  </div>
)

}
</div>
    </div>
    
    
  )
}

export default Navbar