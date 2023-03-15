import React from 'react'
import * as c from './styled'

const Header = () => {
  const  aparecer = ()=> {
    const wrraper = document.querySelector('.wrraper')
    document.querySelector('.wrraper').classList.add('active');
    if(wrraper.style.transform =="scale(1)"){
      wrraper.style.transform = "scale(0)";
    }else{
      wrraper.style.transform = "scale(1)";

    }
    
  }

  return (
   <c.Header>
    <h2>LOGO</h2>
    <nav >
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <button className='btnLogin-popup'onClick={aparecer}  >Login</button>
    </nav>
   </c.Header>
  )
}

export default Header
