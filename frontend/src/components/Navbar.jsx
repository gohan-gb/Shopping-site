import React from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faMagnifyingGlass,faHouse,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
      <p class='logo'> <Link to = '/'> ONEART </Link></p>

      <section class='secOne'>
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/shop'>Shop</Link></p>
        <p><Link to='/aboutus'> <nobr>About us</nobr> </Link></p>
        <p><Link to='/contact'>Contact</Link></p>
      </section>

      <section class='secTwo'>
      <button class='btn search'> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
      <Link to = '/profile'><button class='btn login'>  <FontAwesomeIcon icon={faUser} />  </button></Link>
      <Link to = '/cart'><button class='btn cart'>  <FontAwesomeIcon icon={faCartShopping} /> </button></Link>
      </section>
      </nav>

    </div>
  )
}

export default Navbar