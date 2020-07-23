import React, {useState} from "react"
import {Link} from "@reach/router"
import {css} from "@emotion/core"

const colorBlue = "aqua"

const NavBar = () =>{

  const [padding, setPadding] = useState(3);
  return(
    <header
      onClick={() => setPadding(padding+5)}
      css={ css`
      background-color: ${colorBlue};
      padding: ${padding}em;
      `} >
      <Link to="/">
        Adopt me
      </Link>
      <span role="img" aria-label="logo">🐶🐶🐶🐶🐾</span>
    </header>
  )
}


export default  NavBar;