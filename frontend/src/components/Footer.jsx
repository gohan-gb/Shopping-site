import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faMagnifyingGlass,faHouse,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
        <section>
          <p>
            Get updates and exciting offers,<br /> events and lot more fun stuffs from us.
          </p>
          <input type="mail" placeholder='your@email.com' /> <button> <FontAwesomeIcon icon={faArrowRight} /> </button>
        </section>

        <section>
          <h1>Menu</h1>
          <ul>
            <li><Link to='/shop'>Products</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </section>

        <section>
          <h1>Support</h1>
          <ul>
            <li>Shipping and returns</li>
            <li>Help & FAQs</li>
            <li>Terms and Conditions</li>
            <li>Community</li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Footer