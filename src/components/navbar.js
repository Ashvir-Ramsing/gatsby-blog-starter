import React from 'react'
import { Link } from 'gatsby'
import nav_items from './nav-items'

export const Navbar = () => {
  return (
      <nav>
          {/* <a class='NavbarItems'> */}
          <div class='Navbar'>
            <h1 class='Title'>Wild Animals<sup>TM</sup></h1>
            <ul>
                    {nav_items.map((item, index) => {
                        return(
                            <li key={index}>
                                <a class={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>)
                    })}
            </ul>
            </div>
          {/* </a> */}
      </nav>
  )
}

export default Navbar