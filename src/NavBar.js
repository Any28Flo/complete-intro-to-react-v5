import React from "react"
import {Link} from "@reach/router"
import {css} from "@emotion/core"

const colorBlue = "aqua"

const NavBar = () =>(
  <header css={ css`
  background-color: ${colorBlue};
  padding: 3em;
`} >
    <Link to="/">
      Adopt me
    </Link>
    <span role="img" aria-label="logo">🐶🐶🐶🐶🐾</span>
  </header>
)
export default  NavBar;