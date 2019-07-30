import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.css';
import { withRouter } from 'next/router'


const Header = withRouter(({ siteTitle, router:{pathname} }) => (
  <header className={style.header}>
    <nav className={style.headerContent}>
      <div className={style.headerLogo}>
        {pathname!=='/' && <Link href='/'><a><img className={style.logo} src='/static/images/name.png' height="35"/></a></Link>}
      </div>
      <div className={style.headerLinks}>
        <Link href='/blogs'><a className={style.navLink}>Blog</a></Link>
        <Link href='/talks'><a className={style.navLink}>Talks</a></Link>
        <a className={style.navLink} href="#">Contact</a>
      </div>
    </nav>
  </header>
));

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
