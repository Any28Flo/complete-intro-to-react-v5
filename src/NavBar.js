import React, {useState} from "react"
import {Link} from "@reach/router"
import {css} from "@emotion/core"
import colors from "./colors";
const colorBlue = "aqua"

const NavBar = () =>{

  const [padding, setPadding] = useState(3);
  return(
    <header
      onClick={() => setPadding(padding+5)}
      css={ css`
      background-color: ${colors.default};
      padding: ${padding}em;
      `} >
      <Link to="/">
        Adopt me
      </Link>
      <span
      css={css`
        font-size: 60px;
        &:hover{
        text-decoration: underline
        }
      `}
        role="img" aria-label="logo">🐶🐶🐶🐶🐾</span>
    </header>
  )
}


export default  NavBar;