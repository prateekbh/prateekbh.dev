import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <nav className={style.headerContent}>
      <a className={style.navLink} href="#">Blog</a>
      <a className={style.navLink} href="#">Talks</a>
      <a className={style.navLink} href="#">Contact</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
