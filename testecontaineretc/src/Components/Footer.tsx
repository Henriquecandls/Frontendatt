import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import "../Styles/theme.css";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme}>
      <div className="row ">
        <div className="col-12">Footer</div>
      </div>
    </div>
  )
}

export default Footer;