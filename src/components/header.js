import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <nav className={style.headerContent}>
      <Link href='/blogs'><a className={style.navLink}>Blog</a></Link>
      <Link href='/talks'><a className={style.navLink}>Talks</a></Link>
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
