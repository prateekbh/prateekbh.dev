import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <nav className={style.headerContent}>
      <Link className={style.navLink} to='/blogs'>Blog</Link>
      <Link className={style.navLink} to='/talks'>Talks</Link>
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
