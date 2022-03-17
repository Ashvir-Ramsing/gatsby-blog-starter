import React from "react"
import { Container } from "react-bootstrap"

export const Footer = () => {
  return (
    // <Container>
      <div class="Footer-Container">
        <ul>
          <li>
            {/* <div class="Footer-Card-Container"> */}
              <div class="Container">
                <h1 class="Title">Wild Animals<sup>TM</sup></h1>
                <ul>
                  <li>© 2021 Teamgeek</li>
                </ul>
              </div>
            {/* </div> */}
          </li>
          <li>
            {/* <div class="Footer-Card-Container"> */}
              <div class="Container">
                <h1 class="Title">About us</h1>
                <ul>
                  <li>Locations</li>
                  <li>What do we do</li>
                  <li>How we do it</li>
                  <li>Who are we</li>
                </ul>
              </div>
            {/* </div> */}
          </li>
          <li>
            {/* <div class="Footer-Card-Container"> */}
              <div class="Container">
                <h1 class="Title">Product</h1>
                <ul>
                  <li>Prints</li>
                  <li>Lorem ipsum</li>
                  <li>This document is dummy text</li>
                  <li>Hello</li>
                </ul>
              </div>
            {/* </div> */}
          </li>
          <li>
            {/* <div class="Footer-Card-Container"> */}
              <div class="Container">
                <h1 class="Title">Contact</h1>
                <ul>
                  <li>work@teamgeek.io</li>
                  <li>+27 64 891 2008</li>
                </ul>
              </div>
            {/* </div> */}
          </li>
        </ul>
      </div>
    // </Container>
  )
}

export default Footer
